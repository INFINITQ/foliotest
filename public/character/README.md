# 3D Character Images

Place your 3D character images in this folder with the following naming convention:
- male0001.png
- male0002.png
- male0003.png
- ...
- male0300.png

## Image Requirements:
- Format: PNG (for transparency support)
- Size: Recommended 800x800 pixels or higher
- Background: Transparent preferred
- Naming: male + 4-digit number (padded with zeros) + .png

## Usage:
The Canvas3D component will automatically load and display these images based on scroll progress, creating a smooth 3D character animation effect.

## Example File Structure:
```
public/
  character/
    male0001.png
    male0002.png
    male0003.png
    ...
    male0300.png
```

## Note:
Make sure all 300 images are present for the smoothest animation experience. Missing images will be handled gracefully by the application.