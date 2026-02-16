const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const PUBLIC_DIR = path.join(__dirname, '../public/images');
const SIZES = {
    thumbnail: 300,
    card: 600,
    large: 1200,
};

const QUALITY = 80;

async function optimzeImages(directory) {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            await optimzeImages(filePath);
        } else {
            if (file.match(/\.(jpg|jpeg|png)$/i)) {
                await processImage(filePath);
            }
        }
    }
}

async function processImage(filePath) {
    const ext = path.extname(filePath);
    const filename = path.basename(filePath, ext);
    const dir = path.dirname(filePath);

    // Skip already optimized or WebP files
    if (filename.includes('-opt') || ext === '.webp') return;

    console.log(`Processing: ${filePath}`);

    // 1. Generate WebP version
    try {
        await sharp(filePath)
            .webp({ quality: QUALITY })
            .toFile(path.join(dir, `${filename}.webp`));
        console.log(`  ✓ Created WebP: ${filename}.webp`);
    } catch (err) {
        console.error(`  ✗ Error creating WebP for ${filename}:`, err.message);
    }

    // 2. Optimization check (resizing if too large - simplified for this script)
    // In a real scenario, we might resize based on specific rules or folder names
}

// Function to generate placeholders could be added here

console.log('Starting image optimization...');
if (!fs.existsSync(PUBLIC_DIR)) {
    console.error(`Directory not found: ${PUBLIC_DIR}`);
    process.exit(1);
}

optimzeImages(PUBLIC_DIR)
    .then(() => console.log('Optimization complete!'))
    .catch(err => console.error('Optimization failed:', err));
