# PE05 - Cities with Countries and Currency

## **1️⃣ Input**
The app collects user input through two forms:
- **"Add City" Tab**: Users enter a **City Name** and **Country Name**.
- **"Add Country" Tab**: Users enter a **Country Name** and **Currency**.

Each input field uses a `TextInput` component, and submissions are processed when the user presses a button.

## **2️⃣ Process**
- The app **stores cities and countries as state** using React's `useState`.
- **When a user adds a city**, the app:
  1. Validates the input.
  2. Generates a **unique ID (`uuid`)**.
  3. Updates the `cities` array.
- **When a user adds a country**, the same process updates the `countries` array.

Navigation is handled by **React Navigation** with a **Bottom Tab Navigator**, and each tab displays the relevant data.

## **3️⃣ Output**
- The **Cities Tab** displays a **list of saved cities**.
- The **Countries Tab** displays a **list of saved countries and their currencies**.
- If no data exists, a `"No saved cities!"` or `"No saved countries!"` message appears.

## **🔗 Submission**
- All changes are saved in the `PE05-CitiesWithCountriesCurrency` directory.
- The project is pushed to a private GitHub repository.
