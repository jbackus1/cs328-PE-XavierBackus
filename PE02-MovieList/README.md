# Input

The user provides input through the genre `<select>` dropdown rendered above the movie cards. The dropdown options are generated dynamically from the unique genres found in the movie array, plus an "All Genres" option, and the chosen value is tracked in component state.

# Process

When the selected genre changes, the MovieList component filters the full array of movie objects, keeping only those whose `Genre` property matches the selection (or keeping all movies if "All Genres" is chosen). Clicking a movie card also triggers a small process step that reads the card's title and passes it to a browser `alert()`.

# Output

The output is the re-rendered grid of movie cards showing each remaining movie's title, genre, and release year. The list updates immediately whenever the dropdown selection changes, and clicking any card produces an alert popup displaying that movie's title.
