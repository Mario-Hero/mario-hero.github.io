function buildNextval(pattern) {
    const nextval = new Array(pattern.length).fill(0);
    let j = 0; // length of the previous longest prefix suffix

    // nextval[0] is always 0, so we start from i = 1
    for (let i = 1; i < pattern.length; i++) {
        // handle mismatch after j matches
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = nextval[j - 1];
        }

        // if characters match, increment j
        if (pattern[i] === pattern[j]) {
            j++;
        }

        nextval[i] = j;
    }

    return nextval;
}

function generateNextval() {
    const pattern = document.getElementById('pattern').value;
    const nextval = buildNextval(pattern);
    document.getElementById('result').innerText = `Nextval Array: [${nextval.join(', ')}]`;
}