import os
from PIL import Image
import pytesseract

# Set the tesseract path if needed (uncomment and modify if required)
# pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

image_dir = r'public\images\projects\elf-mobile-store'
images = sorted([f for f in os.listdir(image_dir) if f.endswith('.jpg')])

print("Analyzing images in:", image_dir)
print("=" * 80)

for idx, img_name in enumerate(images, 1):
    img_path = os.path.join(image_dir, img_name)
    print(f"\n{idx}. {img_name}")
    print("-" * 80)
    
    try:
        # Open image
        img = Image.open(img_path)
        print(f"   Dimensions: {img.size[0]}x{img.size[1]}")
        
        # Try to extract text with pytesseract
        try:
            text = pytesseract.image_to_string(img)
            # Get first few meaningful lines
            lines = [line.strip() for line in text.split('\n') if line.strip()]
            if lines:
                print(f"   Detected text (first 5 lines):")
                for line in lines[:5]:
                    print(f"     - {line}")
            else:
                print("   No text detected")
        except Exception as e:
            print(f"   Could not extract text: {e}")
            
    except Exception as e:
        print(f"   Error opening image: {e}")

print("\n" + "=" * 80)
print("Analysis complete!")
