Create a mobile app authentication system with the following requirements:

- QR code scanner as entry point
- OTP-based phone verification after QR scan
- Location capture on initial login for campaign tracking
- Bilingual support (English/Bangla) with language toggle
- Seamless flow: Scan → OTP → Game/Dashboard access
- Profile completion check before redemption actions
- Category-based user registration (Customer, Driver, Retailer, Mechanic)

```

#### **Games Module**
```

Develop a mobile gaming module with:

- Two game types: Spin Wheel and Flip Card
- Probability-based reward system (4 possible prizes per game)
- Dynamic game configuration from admin panel
- Membership tier-based prize eligibility
- Prize types: Coins, Physical gifts, Cashback, Try again
- Post-game flow: Win → Redeem immediately OR Scan Again
- Remove coin conversion option (direct prize winning only)
- Congratulations popup with updated interaction options

```

#### **Wallet & Rewards System**
```

Build a comprehensive wallet system featuring:

- Coin balance display and transaction history
- Redemption request submission to admin
- Pending/Approved/Rejected status tracking
- Multiple redemption types: Physical gifts, Mobile recharge, Digital wallets (Nagad, bKash)
- Gift catalog browsing with detailed view
- Tier-based gift eligibility filtering
- Campaign duration and availability status

```

#### **Enhanced Profile Management**
```

Create category-specific profile systems:

CUSTOMER PROFILE:

- Name, Phone, Vehicle details (model/year)
- ID document upload and verification
- Profile completion percentage tracking

DRIVER PROFILE:

- Vehicle name & model year
- Driving license (front/back) - mandatory
- Document verification workflow

RETAILER/DEALER PROFILE:

- Business/Shop name
- Trade License/BIN Certificate upload
- Shop front image
- Business card photo

MECHANIC PROFILE:

- Workshop name and address
- Workshop picture (optional)
- Mechanic ID card
- Workshop association details

Include:

- Multiple image upload capability
- Document verification status
- Profile completion popup for incomplete profiles
- Admin review and approval system

```

#### **Gift Catalog Frontend**
```

Design an interactive gift catalog with:

- Engaging, grid-based layout
- Gift detail modal with:
  - High-quality product images
  - Detailed descriptions
  - Eligibility criteria (tier + points required)
  - Availability status
  - Campaign duration
  - Step-by-step redemption instructions
  - Terms & conditions
- Filter by user tier and availability
- Search functionality
- Responsive design for mobile devices

```

### **2. ADMIN PANEL DEVELOPMENT PROMPTS**

#### **Enhanced Dashboard & Analytics**
```

Create a comprehensive admin dashboard with:

- Interactive charts and graphs (similar to Google Analytics)
- Date range filters with preset options
- Key metrics display:
  - Total Scans, Users, Rewards Redeemed
  - Redemption status breakdown (Total/Pending/Approved/Needs Review)
  - Scan and redemption trends over time (daily/monthly/yearly)
  - Returning scanners count
  - Payout summary by method (Nagad, bKash, Recharge)
- Real-time data updates
- Export functionality for reports
- Users list with filtering and search
- Visual performance indicators and KPIs

```

#### **Advanced QR Generator**
```

Build a sophisticated QR generation system:

- Single product and batch generation modes
- Product category group selection (PCMO, MCO, CVEO)
- Multi-product selection with select/unselect all
- Search by SKU and product name
- Combined PDF batch export
- QR code customization options
- Generation history and tracking
- Bulk operations for efficiency

```

#### **Enhanced Marketplace Manager**
```

Develop a dynamic marketplace management system:

- Intuitive product registration interface
- Multiple filtering options (type, brand, status, SKU)
- Advanced search functionality
- Inline editing capabilities
- Product fields:
  - Name, SKU/Product Code, Category
  - Size, Weight, MRP
  - Product images, Rich text descriptions
- Visual layout improvements
- Bulk operations support
- Import/export functionality

```

#### **Game Configuration System**
```

Create a flexible game management interface:

- Probability settings for Spin Wheel and Flip Card
- Multi-tier gift assignment (gifts can belong to multiple tiers)
- Reward value configuration
- Game availability scheduling
- A/B testing capabilities
- Real-time game statistics
- Prize pool management
- Win rate analytics

```

#### **Advanced Distribution Analytics**
```

Build a comprehensive mapping and analytics system:

- Interactive heat map with multiple data layers
- Geolocation insights down to store/shop level
- Multi-level filtering:
  - Product Category
  - User Category (Driver, Mechanic, Retailer)
  - Location (District → Sub-district → Union/Thana)
  - Date Range
- Performance analytics by:
  - Membership tiers
  - Category segmentation
  - Sales and scan density
- Export capabilities for business intelligence
- Real-time data visualization

```

#### **User Management & Verification**
```

Develop a comprehensive user management system:

- Category-based user profiles with verification workflows
- Document review and approval interface
- Bulk operations for user management
- Communication tools (notifications, messages)
- User activity tracking and analytics
- Tier management and upgrade logic
- Fraud detection and prevention measures

```

#### **Wallet & Redemption Management**
```

Create a robust redemption processing system:

- Queue management for redemption requests
- Approval/rejection workflow with reasons
- Bulk processing capabilities
- Integration with payment gateways (Nagad, bKash)
- Audit trail for all transactions
- Automated notifications to users
- Financial reporting and reconciliation
- Fraud prevention and monitoring

```

### **3. TECHNICAL ARCHITECTURE PROMPTS**

#### **Backend API Development**
```

Design a scalable backend API system with:

- RESTful API architecture
- JWT-based authentication
- Role-based access control (Admin, User categories)
- Real-time notifications (WebSocket/Push notifications)
- File upload handling for images and documents
- Database optimization for analytics queries
- Caching strategy for performance
- API rate limiting and security measures
- Integration capabilities for payment gateways
- Audit logging for all operations

```

#### **Database Design**
```

Create a comprehensive database schema supporting:

- User management with category-specific fields
- Product catalog and QR code tracking
- Game configuration and probability management
- Transaction and wallet management
- Analytics and reporting requirements
- Document storage and verification tracking
- Campaign and promotion management
- Geolocation and mapping data
- Proper indexing for performance
- Data archiving strategy

```

#### **Mobile App Technical Stack**
```

Implement a cross-platform mobile solution with:

- React Native or Flutter for cross-platform development
- QR code scanning library integration
- Offline capability for basic functions
- Push notification implementation
- Image upload and compression
- Secure storage for sensitive data
- Performance optimization for smooth gaming experience
- Internationalization support (English/Bangla)
- Analytics tracking integration
- App store optimization preparation

```

#### **Security & Compliance**
```

Implement comprehensive security measures:

- Data encryption at rest and in transit
- Secure API endpoints with proper authentication
- Document upload security and virus scanning
- User data privacy compliance
- Fraud detection algorithms
- Secure payment integration
- Regular security audits and updates
- GDPR/local data protection compliance
- Backup and disaster recovery planning

```

### **4. DELIVERABLES CHECKLIST**
```

Ensure completion of all project deliverables:
□ Updated PieQR Web App (frontend) with all enhancements
□ Comprehensive Admin Panel with advanced features
□ Revised Figma UI Designs for all components
□ Updated UAT Document covering new test cases
□ Deployment and configuration documentation
□ Training materials and user manuals
□ API documentation
□ Database schema documentation
□ Security implementation report
□ Performance optimization report
