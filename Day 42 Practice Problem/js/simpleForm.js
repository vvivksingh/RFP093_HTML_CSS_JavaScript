/***********************************************************************************************
 * 
 * As a User need to enter a valid email 
    - E.g. abc.xyz@bl.co.in 
    - Email has 3 mandatory parts (abc, bl & co) and 2 optional (xyz & in) with precise @ and . positions
 * 
 * @author : Vivek Singh
 * @since  : 09.02.2022
 * 
 *********************************************************************************************/

/**********************************************************************************************
 * 
 * Update the salary value when scrolled from left to right and vice-versa
 * 
 ***********************************************************************************************/

 const salary = document.querySelector('#salary');
 const output = document.querySelector('.salary-output');
 output.textContent = salary.value;
 salary.addEventListener('input', function() {
     output.textContent = salary.value;
 });
 
 /**********************************************************************************************
  * 
  * To validate the name field using the REGEX expression
  * 
  *********************************************************************************************/
 
 const text = document.querySelector('#text');
 const textError = document.querySelector('.text-error');
 text.addEventListener('input', function() {
     let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
     if(nameRegex.test(text.value))
         textError.textContent = "";
     else textError.textContent = "Name is Incorrect";
 });
 
 /**
  * To validate the email field using the REGEX expression
  */
 
  const email = document.querySelector('#email');
  const emailError = document.querySelector('.email-error');
  text.addEventListener('input', function() {
      let emailRegex = RegExp("^[A-Za-z0-9]*[@][a-z]{5}[.][a-z]{3}$");
      if(emailRegex.test(email.value))
          emailError.emailContent = "";
      else emailError.emailContent = "Email is Incorrect";
  });
 