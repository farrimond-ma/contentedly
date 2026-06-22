/**
 * Contentedly.ai — Request Access form handler.
 *
 * Setup:
 * 1. Create a new Google Sheet. Add a header row to the first tab:
 *    Timestamp | Package | Name | Email | Company | Message | Source
 * 2. Extensions → Apps Script. Paste this file's contents, replacing the default code.
 * 3. Deploy → New deployment → type "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the deployment URL (ends in /exec).
 * 5. Set it as VITE_GOOGLE_SCRIPT_URL in a GitHub Actions secret (used at build time)
 *    and/or in a local .env file for development.
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const p = e.parameter;

  sheet.appendRow([
    new Date(),
    p.package || '',
    p.name || '',
    p.email || '',
    p.company || '',
    p.message || '',
    p.source || '',
  ]);

  return ContentService.createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
