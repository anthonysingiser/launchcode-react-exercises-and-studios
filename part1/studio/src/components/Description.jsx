import styles from './Description.module.css';

export default function RecipeAuthor(name, recipe, ingredients){
    return(
        <div className={styles.recipeAuthorBlock}>
            <h1>Recipe Author: {name}</h1>
            <h2>The name of the recipe is {recipe}</h2>
            <ul>
                {ingredients.map((ingredient, index) => {
                    return <li key={index}>{ingredient}</li>
                })}
            </ul>
        </div>
    )
}