# Content Loader Library

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0-green.svg)

A lightweight and reusable JavaScript library that allows developers to dynamically load external content into their web pages using the `<content-loader>` custom tag.

---

## Features

- **Custom Tag Support**: Use `<content-loader>` with the `page-url` attribute for dynamic content loading.
- **Error Handling**: Gracefully handles missing attributes and failed requests.
- **Reusable**: Works seamlessly across multiple projects.
- **Lightweight**: Minimal codebase for easy integration.
- **Developer-Friendly**: Clean and well-documented code.

---

## Installation

1. Download or clone this repository:
   ```bash
   git clone https://github.com/ramp00786/content-loader.git

## How to use
- Add the following tag in your HTML:
   ```<content-loader page-url="path/to/your/file.html"></content-loader>```
- Include this `content-loader.js` script in your project.
- On page load, all `<content-loader>` tags will be replaced with the content
- from their respective `page-url`.
