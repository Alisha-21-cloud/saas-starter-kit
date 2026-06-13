const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.next' && f !== '.git') walk(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

walk('.', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Replace next-i18next/serverSideTranslations
    if (content.includes("'next-i18next/serverSideTranslations'")) {
      content = content.replace(/'next-i18next\/serverSideTranslations'/g, "'next-i18next/pages/serverSideTranslations'");
      changed = true;
    }
    if (content.includes('"next-i18next/serverSideTranslations"')) {
      content = content.replace(/"next-i18next\/serverSideTranslations"/g, '"next-i18next/pages/serverSideTranslations"');
      changed = true;
    }

    // Replace next-i18next
    if (content.match(/from\s+['"]next-i18next['"]/)) {
      content = content.replace(/from\s+'next-i18next'/g, "from 'next-i18next/pages'");
      content = content.replace(/from\s+"next-i18next"/g, 'from "next-i18next/pages"');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
