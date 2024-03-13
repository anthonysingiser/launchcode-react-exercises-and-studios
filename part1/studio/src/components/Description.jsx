import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor(){
    let authorLink = "https://www.google.com";
    let authorName = "Hamish Gulbrahamsen";
    let authorPhoto = "https://qph.cf2.quoracdn.net/main-qimg-6096ef793903be67a8c1ee85a1bd730e-lq";

    return(
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="alt text" className={styles.imageUpdates}/>
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink} target="_blank" > Blog Name</a>
            </div>
        </div>
    )
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Butter Chicken</h1>
                    <p>A delicious recipe that I have been honing for years</p>
                </div>
                <RecipeAuthor />   
            </div>
        )
    }
}

export default RecipeDescription;