import os

def find_css_files(folder_path):
    css_files = []
    for file in os.listdir(folder_path):
        if file.endswith('.css'):
            css_files.append(os.path.join(folder_path, file))
    return css_files

def merge_css_files(css_files, output_file):
    with open(output_file, 'w') as outfile:
        for css_file in css_files:
            with open(css_file, 'r') as infile:
                outfile.write(infile.read())

def main():
    script_directory = os.path.dirname(os.path.realpath(__file__))
    output_file = os.path.join(script_directory, "styles.css")

    # Check if styles.css exists, and delete it if it does
    if os.path.exists(output_file):
        os.remove(output_file)
        print("Existing styles.css file deleted.")

    css_files = find_css_files(script_directory)
    if css_files:
        merge_css_files(css_files, output_file)
        print("CSS files merged successfully into styles.css.")
    else:
        print("No CSS files found in the current directory.")


if __name__ == "__main__":
    main()
