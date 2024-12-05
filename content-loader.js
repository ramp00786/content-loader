/**
 * Content Loader Library
 * Author: Tulsiram Kushwah
 * Version: 1.0
 *
 * This library enables dynamic content loading using the `<content-loader>` tag
 * with a `page-url` attribute. The tag is automatically replaced with the
 * content from the specified URL.
 *
 * Usage:
 * - Add the following tag in your HTML:
 *   <content-loader page-url="path/to/your/file.html"></content-loader>
 *
 * - Include this `content-loader.js` script in your project.
 * - On page load, all `<content-loader>` tags will be replaced with the content
 *   from their respective `page-url`.
 */

document.addEventListener("DOMContentLoaded", () => {
    // Select all <content-loader> elements
    const loaders = document.querySelectorAll("content-loader");
  
    // Iterate over each loader element
    loaders.forEach((loader) => {
      const pageUrl = loader.getAttribute("page-url"); // Get the page-url attribute
      if (pageUrl) {
        // Fetch content from the page URL
        fetch(pageUrl)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Failed to load content from ${pageUrl}: ${res.statusText}`);
            }
            return res.text(); // Parse response as text
          })
          .then((data) => {
            // Replace the <content-loader> element with the fetched content
            
            const wrapper = document.createElement("div");
            wrapper.innerHTML = data;
            loader.replaceWith(...wrapper.childNodes);
          })
          .catch((err) => {
            // Handle errors gracefully
            console.error(err);
            loader.innerHTML = `<div style="color: red;">Failed to load content.</div>`;
          });
      } else {
        console.warn("<content-loader> is missing the required 'page-url' attribute.");
        loader.innerHTML = `<div style="color: orange;">No page-url provided.</div>`;
      }
    });
  });
  