import os
import shutil

# Directory containing the images
img_dir = r'public\images\projects\elf-mobile-store'

# Mapping of old names to new contextual names based on MCP image analysis
# Format: 'old_filename.jpg': 'new_descriptive_name.jpg'
rename_mapping = {
    'Screenshot_20260205_120556_ELF Bangladesh.jpg': '01-keyboard-input-screen.jpg',
    'Screenshot_20260205_120603_ELF Bangladesh.jpg': '02-home-with-vehicles-and-cars.jpg',
    'Screenshot_20260205_120610_ELF Bangladesh.jpg': '03-car-detail-grille-view.jpg',
    'Screenshot_20260205_120617_ELF Bangladesh.jpg': '04-keyboard-form-input.jpg',
    'Screenshot_20260205_120628_ELF Bangladesh.jpg': '05-blank-loading-screen.jpg',
    'Screenshot_20260205_120635_ELF Bangladesh.jpg': '06-sign-logo-display.jpg',
    'Screenshot_20260205_120645_ELF Bangladesh.jpg': '07-list-menu-with-dates.jpg',
    'Screenshot_20260205_120650_ELF Bangladesh.jpg': '08-navigation-category-buttons.jpg',
    'Screenshot_20260205_120657_ELF Bangladesh.jpg': '09-form-check-interface.jpg',
    'Screenshot_20260205_120705_ELF Bangladesh.jpg': '10-content-display-screen.jpg',
    'Screenshot_20260205_120716_ELF Bangladesh.jpg': '11-shopping-cart-with-person.jpg',
    'Screenshot_20260205_120723_ELF Bangladesh.jpg': '12-car-details-with-people.jpg',
    'Screenshot_20260205_120729_ELF Bangladesh.jpg': '13-sign-display-interface.jpg',
    'Screenshot_20260205_120734_ELF Bangladesh.jpg': '14-content-panel-view.jpg',
    'Screenshot_20260205_120752_ELF Bangladesh.jpg': '15-auto-show-with-dates.jpg',
    'Screenshot_20260205_120800_ELF Bangladesh.jpg': '16-logo-partner-display.jpg',
    'Screenshot_20260205_120812_ELF Bangladesh.jpg': '17-information-panel.jpg',
    'Screenshot_20260205_120820_ELF Bangladesh.jpg': '18-motorcycle-products-list.jpg',
    'Screenshot_20260205_120829_ELF Bangladesh.jpg': '19-content-moisture-view.jpg',
    'Screenshot_20260205_120837_ELF Bangladesh.jpg': '20-keyboard-input-interface.jpg',
    'Screenshot_20260205_120846_ELF Bangladesh.jpg': '21-multiple-sections-display.jpg',
    'Screenshot_20260205_120858_ELF Bangladesh.jpg': '22-product-card-display.jpg',
    'Screenshot_20260205_120906_ELF Bangladesh.jpg': '23-notification-message-panel.jpg',
    'Screenshot_20260205_120915_ELF Bangladesh.jpg': '24-content-information-view.jpg',
    'Screenshot_20260205_120922_ELF Bangladesh.jpg': '25-detailed-content-page.jpg',
    'Screenshot_20260205_120930_ELF Bangladesh.jpg': '26-person-profile-with-dates.jpg',
    'Screenshot_20260205_120936_ELF Bangladesh.jpg': '27-heart-icon-with-dates.jpg',
    'Screenshot_20260205_120945_ELF Bangladesh.jpg': '28-information-board-display.jpg',
}

print("ELF Bangladesh Mobile Store - Image Renaming Script")
print("=" * 80)
print(f"\nProcessing images in: {img_dir}")
print(f"Total images to rename: {len(rename_mapping)}\n")

# Perform renaming
renamed_count = 0
errors = []

for old_name, new_name in rename_mapping.items():
    old_path = os.path.join(img_dir, old_name)
    new_path = os.path.join(img_dir, new_name)
    
    if os.path.exists(old_path):
        try:
            os.rename(old_path, new_path)
            print(f"✓ Renamed: {old_name}")
            print(f"       to: {new_name}\n")
            renamed_count += 1
        except Exception as e:
            error_msg = f"✗ Error renaming {old_name}: {str(e)}"
            print(error_msg)
            errors.append(error_msg)
    else:
        error_msg = f"✗ File not found: {old_name}"
        print(error_msg)
        errors.append(error_msg)

print("=" * 80)
print(f"\nRenaming Complete!")
print(f"Successfully renamed: {renamed_count}/{len(rename_mapping)} files")

if errors:
    print(f"\nErrors encountered: {len(errors)}")
    for error in errors:
        print(f"  - {error}")
else:
    print("\nAll files renamed successfully!")
