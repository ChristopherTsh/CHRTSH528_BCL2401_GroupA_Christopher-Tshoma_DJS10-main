# Blog Post App

This is a simple React application that fetches and displays a list of blog posts from an external API. The posts are displayed in a numbered list and centered on the page.

## Features

- Fetches blog posts from the JSONPlaceholder API.
- Displays posts in a numbered list.
- Centers the list of posts on the page.
- Handles errors that may occur during data fetching.

## Components

### Api Component

Handles fetching data from the external API and updating the parent component's state with the fetched posts or any error that occurs.

### App Component

Manages the state of the posts and error messages, and displays the list of posts. Uses the `Api` component to fetch the data.

## Installation

1. Clone the repository:
   ```bash
   [git clone](https://github.com/ChrristopherTsh/)
