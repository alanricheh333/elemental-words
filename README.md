# Elemental Words

An Algorithm that solves the Elemental words problem, to see the problem please refer to this page: https://platinum-hunter-292.notion.site/Senior-Developer-Coding-Challenge-02520663aad44f18924ff51d1809589b

This solution is presented in Typescript.

## Algorithm explanation
Please refer to the image: [Algorithm Explained](ElementalWordsAlgo.jpeg)

## First-time native installation for local development
Follow these steps when setting up for the very first time:

1. Clone the repository and enter it.

	1.1 Either you clone with ssh key (you need to generate an ssh key please follow the steps here: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
	and add it to your account settings. Then clone and enter the repo:

    ```
    git clone git@github.com:alanricheh333/elemental-words.git
    cd elemental-words
    ```
	1.2 Or you can clone by https
    ```
    git clone https://github.com/alanricheh333/elemental-words.git
    ```

2. Install all required packages with npm.

    ```
    npm install
    ```


## Running the project
To run the project please follow these steps:

1. To run the algorithm just type the command:

    ```
    ts-node src/main.ts
    ```


2. To change the element map object, go to src/data.ts and change the ELEMENTS object.
