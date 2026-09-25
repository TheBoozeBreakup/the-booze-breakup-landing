# The Booze Breakup Landing Page

A modern, minimal landing page for "The Booze Breakup" book.

## Features

- Responsive design that works on all devices
- Dark theme with red accent color
- Email signup form
- Social media links (Twitter/X and Instagram)
- Clean, editorial typography

## Deployment to IONOS

### Option 1: Using IONOS File Manager (Easiest)
1. Log into your IONOS account
2. Go to **Hosting** → **File Manager**
3. Navigate to the `html` or `public_html` folder
4. Upload these files:
   - `index.html`
   - `styles.css`
   - `script.js`

### Option 2: Using Git/GitHub (Recommended)
1. Connect your IONOS domain to this GitHub repository
2. Set up auto-deployment via IONOS GitHub integration
3. Any changes you push to `main` will automatically deploy

### Option 3: Using FTP
1. Get your FTP credentials from IONOS
2. Use an FTP client (FileZilla, Cyberduck, etc.)
3. Connect to your IONOS FTP server
4. Upload the files to your web root

## Customization

### Email Form Integration
To connect the email signup form to an email service:

1. **Mailchimp**: Add your Mailchimp form action URL
2. **ConvertKit**: Use their embed code
3. **Your own backend**: Update the form action in `script.js`

## File Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # Styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 The Booze Breakup. All rights reserved.
