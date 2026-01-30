import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDir = path.join(__dirname, 'dist');
const outputZip = path.join(__dirname, 'deploy.zip');

console.log('📦 Preparing deployment package...');

// 1. Check if build directory exists
if (!fs.existsSync(buildDir)) {
  console.error('❌ Build directory "dist" not found. Please run "npm run build" first.');
  process.exit(1);
}

// 2. Remove existing zip if any
if (fs.existsSync(outputZip)) {
  fs.unlinkSync(outputZip);
}

// 3. Zip the content
console.log('🗜️  Zipping build output...');

const isWindows = os.platform() === 'win32';

let command;

if (isWindows) {
  // PowerShell command to zip contents of dist
  // Note: Compress-Archive -Path dist\* includes the files, not the directory itself if we use wildcard
  command = `powershell -Command "Compress-Archive -Path '${buildDir}\\*' -DestinationPath '${outputZip}' -Force"`;
} else {
  // Linux/Mac zip command
  // cd dist && zip -r ../deploy.zip .
  command = `cd "${buildDir}" && zip -r "${outputZip}" .`;
}

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error creating zip: ${error.message}`);
    // Fallback or detailed error
    if (!isWindows && error.message.includes('not found')) {
      console.error('   Hint: Ensure "zip" is installed (sudo apt install zip).');
    }
    return;
  }

  console.log(`✅ Deployment package created: ${outputZip}`);
  console.log(`\n🚀 Ready to deploy!`);
  console.log(`1. Upload 'deploy.zip' to your cPanel File Manager (inside public_html).`);
  console.log(`2. Extract it.`);
  console.log(`3. Delete 'deploy.zip'.`);
});
