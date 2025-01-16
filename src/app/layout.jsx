import '../../styles/globals.css';

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

import '../../styles/globals.css';
import Footer from './Footer';

export default async function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
}
