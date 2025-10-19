/**
 * Icon Generator Script for Nyota CRM
 *
 * This script generates all required favicon and app icon sizes
 * from the existing logo.png file.
 *
 * Usage:
 *   1. Install sharp: npm install sharp --save-dev
 *   2. Run: node scripts/generate-icons.js
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Icon sizes configuration
const iconSizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
];

// Open Graph image (special size for social sharing)
const ogImageSize = { width: 1200, height: 630 };

const publicDir = path.join(__dirname, "..", "public");
const logoPath = path.join(publicDir, "logo.png");

async function generateIcons() {
  try {
    console.log("🎨 Starting icon generation...\n");

    // Check if logo exists
    if (!fs.existsSync(logoPath)) {
      console.error("❌ Error: logo.png not found in /public directory");
      process.exit(1);
    }

    // Generate square icons
    for (const { name, size } of iconSizes) {
      const outputPath = path.join(publicDir, name);

      await sharp(logoPath)
        .resize(size, size, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .png()
        .toFile(outputPath);

      console.log(`✅ Generated: ${name} (${size}x${size})`);
    }

    // Generate Open Graph image (1200x630 with logo centered)
    const ogPath = path.join(publicDir, "og-image.png");

    // Get logo dimensions first
    const logoMetadata = await sharp(logoPath).metadata();
    const logoHeight = logoMetadata.height || 200;

    // Calculate target logo size (max 400px height to fit in 630px canvas)
    const targetLogoHeight = Math.min(400, logoHeight);

    await sharp(logoPath)
      .resize(null, targetLogoHeight, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .png()
      .toBuffer()
      .then((resizedLogo) => sharp(resizedLogo).metadata())
      .then((metadata) => {
        const logoWidth = metadata.width || 400;
        const logoHeight = metadata.height || 400;

        return sharp({
          create: {
            width: ogImageSize.width,
            height: ogImageSize.height,
            channels: 4,
            background: { r: 124, g: 29, b: 29, alpha: 1 }, // Burgundy background
          },
        })
          .composite([
            {
              input: logoPath,
              resize: { width: null, height: targetLogoHeight, fit: "inside" },
              left: Math.floor((ogImageSize.width - logoWidth) / 2),
              top: Math.floor((ogImageSize.height - logoHeight) / 2),
            },
          ])
          .png()
          .toFile(ogPath);
      });

    console.log(
      `✅ Generated: og-image.png (${ogImageSize.width}x${ogImageSize.height})`
    );

    // Generate favicon.ico (32x32 PNG format - browsers support this)
    const faviconPath = path.join(publicDir, "favicon.ico");

    await sharp(logoPath)
      .resize(32, 32, {
        fit: "contain",
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      })
      .png()
      .toFile(faviconPath);

    console.log(`✅ Generated: favicon.ico (32x32)`);

    console.log("\n✨ All icons generated successfully!");
    console.log("\n📝 Next steps:");
    console.log("   1. Test icons in browser (npm run dev)");
    console.log("   2. Test social sharing with Facebook Debugger");
    console.log("   3. Deploy and verify on production");
  } catch (error) {
    console.error("❌ Error generating icons:", error.message);
    process.exit(1);
  }
}

// Run the generator
generateIcons();
