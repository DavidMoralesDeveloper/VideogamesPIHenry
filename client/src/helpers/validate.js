const regexName = /\d/i;

export const validate = (form) => {
  const errors = {};

    if( form.name.length < 3 || regexName.test(form.name))
      errors.name = "Please, type a name with at least 3 characters and only letter";

    if(form.rating === '' || form.rating > 5 )
    errors.rating = "the raiting is 1 to 5"

    if( form.platforms.length < 1)
    errors.platforms = "Add a plataform"
    
    if( form.genres.length < 1)
    errors.genres = "Add a genre"


    return errors
}

// export const valideSubmit = (form) => {
//   //
// }