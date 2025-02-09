# Next.js 15 App Router Bug Report: About Page Not Rendering

This repository demonstrates a bug encountered when using the Next.js 15 App Router.
The problem involves the failure of the About page to render correctly when accessed via a navigation link from the Home page.

## Bug Description
The About page, accessible via a `<Link>` component in the Home page, fails to render correctly. The issue stems from a potential misconfiguration in the App Router that prevents proper navigation to the About page. This bug only occurs when using the app router of Next.js 15

## Steps to Reproduce
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `http://localhost:3000`
5. Click the link to go to the About page.
6. Observe the error in the console.

## Expected Behavior
The About page should render correctly showing an `<h1>` tag with the text "About page".

## Actual Behavior
The About page does not render correctly. Instead a blank page is shown, the app crashes, or an error is shown.

## Solution
The issue was resolved by correcting the routing configuration in the `app` directory and ensuring that the About page is correctly defined.
