<link rel="stylesheet" href="styles.css">
<h1 id="title">Gelato Picker</h1>
<p id="description">Build your gelato </p>
<form id="survey-form">
  <label for="name" id="name-label">Name</label>
  <input id="name" type="text" placeholder="type name here" required>
    <br>
    <label for="email" id="email-label">Email</label>
  <input id="email" type="email" placeholder="type email here" required>
    <br>
  <input id="number" type="number" min="1" max="3" placeholder="up to 3 scoops">
    <label for="number" id="number-label">How many scoops?</label><br>

<select name="icecreams" id="dropdown"> 
  <option value="bowl">Bowl</option>
  <option value="cone">Cone</option>
</select>
<label for="dropdown" id="dropdown-label">Would you like a bowl or a cone?</label></br><br>
<label for="flavours">Pick your flavours</label><br>
<input type="checkbox" value="pistachio" name="flavours">Pistachio</input>
<input type="checkbox" value="fior de latte" name="flavours">Fior de Latte</input>
<input type="checkbox" value="very cherry" name="flavours">Very Cherry</input><br><br>
<label for="payment">How will you pay?</label><br>
<input type="radio" name="payment" value="debit" id="debit">Debit</input>
<input type="radio" name="payment"  value="credit" id="credit">Credit</input>
<input type="radio" name="payment" value="credit" id="cash">Cash</input><br><br>
<label for="comments">Anything else to add?</label><br>
<textarea id ="comments">Add your comments here</textarea><br>
<button id="submit" type="submit">Submit</button>
    </form>
    </link>
