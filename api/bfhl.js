module.exports = (req, res) => {
  try {
    const { data } = req.body;

    const is_success = true;
    const full_name = "naman_sharma";
    const dob = "17112004";
    const user_id = `${full_name}_${dob}`;
    const email = "naman1956.be22@chitkara.edu.in";
    const roll_number = "2210991956";

    const even_numbers = [];
    const odd_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    let concatString = "";

    data.forEach((item) => {
      if (/^[0-9]+$/.test(item)) {
        let num = parseInt(item);
        sum += num;
        (num % 2 === 0 ? even_numbers : odd_numbers).push(item);
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        concatString += item;
      } else {
        special_characters.push(item);
      }
    });

    // Generate alternating caps from reversed concat string
    const reversedConcat = concatString.split("").reverse().map((char, idx) =>
      idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    ).join("");

    res.status(200).json({
      is_success,
      user_id,
      email,
      roll_number,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string: reversedConcat
    });
  } catch (err) {
    res.status(500).json({
      is_success: false,
      message: "Server error",
      error: err.message
    });
  }
};
