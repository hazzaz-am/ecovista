# EcoVista

EcoVista is a web application that provides real-time weather information for a given location. It's built with Next.js and Tailwind CSS, offering a clean and modern user interface to display weather data including temperature, wind speed, air quality index (AQI), and more.

![EcoVista Screenshot](public/network.gif)

## Features

- **Location-Based Weather:** Automatically detects the user's location to provide instant weather updates.
- **Comprehensive Data:** Displays a wide range of weather information, such as temperature, wind speed, and air quality.
- **Dynamic UI:** The user interface is designed to be responsive and intuitive, with components that clearly present weather data.
- **API Integration:** Fetches data from external weather APIs to ensure accuracy and real-time updates.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Runtime:** [Bun](https://bun.sh/)

## Project Structure

The project is organized into the following directories:

- `app/`: Contains the core application logic, including pages, layouts, and API routes.
  - `app/[location]/`: Dynamic routes for displaying weather based on location.
  - `app/api/`: API routes for fetching location and weather data.
- `components/`: Reusable React components used throughout the application (e.g., `WeatherComponent`, `AQIComponent`).
- `lib/`: Utility functions and helper scripts for fetching and processing data.
- `public/`: Static assets like images, icons, and fonts.

## Setup and Installation

To get the project up and running on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hazzaz-am/ecovista
   cd ecovista
   ```

2. **Install dependencies:**
   This project uses [Bun](https://bun.sh/) as the package manager.

   ```bash
   bun install
   ```

3. **Run the development server:**
   ```bash
   bun run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Workflow

1. **Location Detection:** Upon visiting the site, the `LocationDetector` component attempts to identify the user's geographical location.
2. **Data Fetching:** The application sends a request to its internal API (`/api/location/[name]`), which in turn fetches weather data from an external source.
3. **Displaying Data:** The fetched data is then passed to various components under `app/[location]/` to be displayed on the dashboard. Each component (`@temperature`, `@aqi`, etc.) is responsible for rendering a specific piece of weather information.
4. **Dynamic Routing:** Next.js's parallel routing is used to show different weather metrics simultaneously for a selected location.

---
