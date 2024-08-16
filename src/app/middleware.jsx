import { NextResponse } from 'next/server';

// Utility functions to fetch themes and dev portal data
async function fetchTheme(url) {
  const response = await fetch(url);
  if (!response.ok) {
    return null;
  }
  return await response.json();
}

// Example URL-fetching functions (these should be defined in your project)
function getThemeUrl() {
  return process.env.THEMES_URL || 'https://sinergi8.apicentrum.site/v1/api/configuration';
}

export async function middleware(req) {
  const host = 'demo-publish.apicentrum.site';
  const themesUrl = getThemeUrl();
  let findDomain = await fetchTheme(`${themesUrl}/x10s-themes/by-domain?domain=${host}`);

  // Check if the theme was not found, and try again
  if (!findDomain) {
    findDomain = await fetchTheme(`${themesUrl}/x10s-themes/by-domain?domain=${host}`);
  }

  if (!findDomain) {
    return NextResponse.redirect(new URL('/404', req.url));
  } 

  console.log(findDomain);
  
  const { tenant, pathThemes, activeThemes, domain, company, basePath } = findDomain.data;

  // Share data with your pages or components
  req.nextUrl.searchParams.set('tenant', tenant);
  req.nextUrl.searchParams.set('theme', pathThemes);
  req.nextUrl.searchParams.set('active_theme', activeThemes);
  req.nextUrl.searchParams.set('domain', domain);
  req.nextUrl.searchParams.set('company', company);
  req.nextUrl.searchParams.set('basepath', basePath);

  return NextResponse.next();
}

// Define the paths you want the middleware to run on
export const config = {
  matcher: '/:path*',
};
