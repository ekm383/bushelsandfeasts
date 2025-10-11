import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Img from "gatsby-image"
import Section from "../components/globals/section/Section"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import Gallery from "../components/Gallery"
import EbookButton from "../components/EbookButton"

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      getImages: allFile(filter: { relativeDirectory: { eq: "bio" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      rina: file(relativePath: { eq: "la-dolce-rina-bg-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      matt: file(relativePath: { eq: "matt.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const images = data.getImages.edges
  const Bookitem = { price: `price_1HcBHNKwzUaWz0rWmMItssY9`, quantity: 1 }
  return (
    <Layout>
      <StyledCookbook>
        <Section style={{ width: "100vw", flexDirection: "column" }}>
          <div className="header-container">
            <div className="rina-image">
              <Img fluid={data.rina.childImageSharp.fluid} />
            </div>
            <div className="box box-title">
              <h1>Bushels and Feasts</h1>
              <h3>
                170 FARM TO TABLE RECIPES FOR A GLUTEN AND GRAIN FREE LIFESTYLE
              </h3>
              <p>By Rina Thoma with Sarah Fragoso</p>
              <p>
                BUSHELS AND FEASTS is a collaboration between Le Cordon Bleu
                trained chef Rina Thoma and international bestselling cookbook
                author Sarah Fragoso. The result is a celebration of real food
                inspired by California and French cuisine; beautiful, delicious,
                market-fresh, family meals free from gluten and grains and
                filled with healthy fats and decadent desserts.{" "}
              </p>
            </div>
          </div>
          <div className=" bio-gallery">
            {images.map(({ node }, index) => {
              return (
                <div key={index} className={`bio-item`}>
                  <Img fluid={node.childImageSharp.fluid} />
                </div>
              )
            })}
          </div>
          <div className="box">
            <div className="testimonial">
              <div className="matt-image">
                <Img fluid={data.matt.childImageSharp.fluid} className="matt" />
              </div>
              <div className="matt-copy">
                <p>
                  <strong>
                    <FaQuoteLeft />{" "}
                    <em>
                      Rina and Sarah will inspire their readers to focus on
                      transforming bushels of fresh, quality, local, and
                      seasonal ingredients into healthy, delicious, everyday
                      feasts. The pages of this book are filled with wit, fun,
                      and humor, but also exquisitely beautiful, warm,
                      enchanting, and bursting at the seams with elegant food
                      photography and sweeping Northern California landscapes.
                    </em>{" "}
                  </strong>
                </p>
                <p>
                  <strong>
                    <em>
                      BUSHELS AND FEASTS will inspire, delight, and encourage
                      readers to share good food and wine with the people they
                      love, creating special meals and memories for family and
                      friends. The recipes in this book will leave readers
                      feeling satisfied, accomplished, and exhilarated with a
                      nourished mind, body and soul.
                    </em>{" "}
                    <FaQuoteRight />
                  </strong>
                </p>
                <p>
                  <strong>
                    <em>Matt Raso, Famed Nobu executive chef</em>{" "}
                  </strong>
                </p>
              </div>
            </div>
            <p style={{ marginTop: "2rem" }}>
              Matt Raso is currently the executive chef at Canoe House at Mauna
              Lani, Auberge Resorts Collection, on the Big Island of Hawaii, and
              former executive chef at Nobu restaurant locations including
              Dallas, Waikiki, Honolulu, and Miami. Matt is passionate about
              cuisine that celebrates the bounty of local ingredients and those
              who so beautifully craft that food.
            </p>
            {/* <p className="dessert-link">
              If you want to try some recipes from BUSHELS & FEASTS, get your{" "}
              <a href="https://www.10glutenandgrainfree.com/">
                Free Dessert eBook
              </a>{" "}
              containing 10 irresistible, gluten and grain-free, real food
              desserts!
            </p> */}
            <a
              className="cookbook-button"
              href="https://www.amazon.com/Bushels-Feasts-Recipes-Gluten-Lifestyle/dp/1735926213/ref=sr_1_1?dchild=1&keywords=bushels+and+feasts&qid=1606956534&sr=8-1"
              target="_blank"
              rel="noreferrer"
            >
              <button> Buy Cookbook </button>
            </a>
            <a className="cookbook-button" href="/">
              <EbookButton label={"Buy eCookbook"} lineItems={[Bookitem]} />
            </a>
            <ul
              style={{ margin: "1rem 0rem 0rem 0rem", listStyleType: "none" }}
            >
              <li>&#x2714; Gluten Free</li>
              <li>&#x2714; Grain Free</li>
              <li>&#x2714; Refined Sugar Free</li>
              <li>&#x2714; Paleo-friendly</li>
              <li>&#x2714; Keto-friendly</li>
              <li>&#x2714; Low Carb</li>
            </ul>
          </div>
          <div className="book-content box">
            <h3>Chapter 1: Hors d’ Oeuvres</h3>
            <ul>
              <li>Citrus and Herb Marinated Olives</li>
              <li>Duck Terrine with Dates and Pistachios</li>
              <li>Fig and Shallot Marmalade</li>
              <li>Fresh Goat Cheese Baked with Olive Oil, Herbs, and Lemon</li>
              <li>Fresh Homemade Ricotta</li>
              <li>Green Olive Spread with Basil and Almonds</li>
              <li>Grilled Zucchini Canapés</li>
              <li>Maple-Candied Pecans</li>
              <li>Olive Spread with Fig and Walnuts</li>
              <li>Rosemary and Sage Toasted Walnuts</li>
              <li>Salted Olive and Almond Crisps</li>
              <li>Simple Spiced-Butter Almonds</li>
              <li>Sun-Dried Tomato and Garlic-Herbed Goat Cheese</li>
              <li>Eggplant and Ricotta Tart with Fresh Herbs and Tomatoes</li>
              <li>Fresh Figs with Prosciutto, Melon, and Mint Cream</li>
              <li>Hard-Cooked Eggs with Tarragon Mayonnaise</li>
              <li>Le Grand Aïoli: A Vegetable Feast with Garlic Mayonnaise</li>
              <li>Mushrooms Escargot with Walnuts, Herbs, and Gruyère</li>
              <li>Onion, Anchovy, and Olive Tart</li>
              <li>Roasted Squid with Toasted Almonds, Garlic, and Herbs</li>
              <li>Sardine Spread with Goat Cheese, Lemon, and Herbs</li>
              <li>
                Sautéed Black Olives, Roasted Red Peppers, and Fresh Ricotta
              </li>
              <li>
                Smoked Salmon Spread with Crème Fraîche, Horseradish, and Dill
              </li>
              <li>Warm Blue Cheese Dates with Brown Butter and Lime Zest</li>
              <li>Whipped Feta Spread with Mint and Pomegranate</li>
              <li>Zucchini Fritters with Basil-Crème Fraîche</li>
            </ul>
            <h3>Chapter 2: Soup and Salad</h3>
            <ul>
              <li>
                A Warm Salad of Baked Wild Mushrooms with Shaved Parmesan,
                Bacon, and Pine Nuts
              </li>
              <li>
                Blood Orange Salad with Dates, Pomegranate, Parmesan, and
                Almonds
              </li>
              <li>Bouillabaisse: A Classic Seafood Stew from Provence</li>
              <li>Chestnut Soup with Crème Fraîche, Apples, and Spices</li>
              <li>
                Duck Confit Salad with Piquillo Peppers, Olives, and Almonds
              </li>
              <li>
                Farmhouse Salad with Country Bacon, Soft-Cooked Egg, and
                Crispy-Smashed Duck Fat Potatoes
              </li>
              <li>French Onion Soup</li>
              <li>Green Goddess Herb and Garden Vegetable Soup</li>
              <li>
                Persimmon and Pomegranate Salad with Manchego and Marcona
                Almonds
              </li>
              <li>Roasted Beet and Orange Salad with Feta and Almonds</li>
              <li>
                Roasted Eggplant and Red Pepper Soup with Fresh Ricotta and
                Herbs
              </li>
              <li>Salad Niçoise</li>
            </ul>
            <h3>Chapter 3: Eggs, Gratins, Crêpes, and Tarts</h3>
            <ul>
              <li>Buckwheat Crêpes with Ham, Egg, and Cheese</li>
              <li>
                Clafoutis with Tomatoes, Goat Cheese, Olives, Garlic, and Basil
              </li>
              <li>Gratin of Baked Eggs, Kale, Salmon, and Mustard Cream</li>
              <li>Mushroom and Gouda Soufflé</li>
              <li>
                Shrimp-Stuffed Buckwheat Crêpes with Morel Mushroom and
                Asparagus Cream Sauce
              </li>
            </ul>
            <h3>Chapter 4: Vegetables and “Pasta”</h3>
            <ul>
              <li>Baked Summer Vegetables</li>
              <li>Celery Root Purée</li>
              <li>Cauliflower Purée</li>
              <li>Carrot and Parsnip Purée</li>
              <li>Spaghetti Squash Polenta</li>
              <li>Celery Root Salad with Crème Fraîche and Mustard</li>
              <li>Crispy-Smashed Duck Fat Potatoes</li>
              <li>
                Fresh Zucchini Linguine with Chanterelles, Crème Fraîche, Lemon,
                and Parmesan
              </li>
              <li>
                Grilled Romaine with Shaved Parmesan and a Caesar Vinaigrette
              </li>
              <li>Grilled Summer Vegetables</li>
              <li>
                Heirloom Tomato Salad with Niçoise Olives, Burrata, and Basil
              </li>
              <li>Leeks with Bacon and Eggs in a Mustard Vinaigrette</li>
              <li>Potatoes with Reblochon, Bacon, and Onions</li>
              <li>Ragoût of Morels with Fresh Herbs and Crème Fraîche</li>
              <li>Mushrooms Sautéed with Shallots, Garlic, and Herbs</li>
              <li>Sautéed Mushrooms with Madeira and Cream</li>
              <li>
                Roasted Asparagus with Prosciutto, Parmesan, and Poached Eggs
              </li>
              <li>
                Rolled Eggplant with Red Peppers, Basil-Whipped Chèvre, and
                Tomato Sauce
              </li>
              <li>Root Vegetables Baked in Cream, Garlic, and Gruyère</li>
              <li>Sliced Potatoes Baked in Butter</li>
              <li>Spiced Butternut Squash Gratin</li>
              <li>
                Spinach and Ricotta Quenelles with Brown Butter and Parmesan
              </li>
              <li>Stuffed Eggplant</li>
              <li>Sweet Potato Quenelles with Brown Butter and Sage</li>
              <li>Tomatoes Stuffed with Almonds, Herbs, Cheese, and Garlic</li>
            </ul>
            <h3>Chapter 5: Fish and Shellfish</h3>
            <ul>
              <li>
                “Spaghetti” with Sausage, Scallops, and Shrimp in Sauce
                Basquaise
              </li>
              <li>Baked Scallops with Tomato Sauce and Gruyère</li>
              <li>
                Baked Scallops with White Wine, Cream, Gruyère, Almonds, and
                Herbs
              </li>
              <li>California Sea Bass with Chermoula and Pomegranate</li>
              <li>
                Escargot Ragoût with Garlic, Sausage, Tomatoes, and Parmesan
              </li>
              <li>Grilled Halibut Fillet with Lemon-Horseradish Cream</li>
              <li>Mussels Cooked in Wine, Cream, and Tarragon</li>
              <li>Mussels Stuffed with Garlic, Parmesan, Almonds, and Herbs</li>
              <li>Pan-Fried Turbot with Lemon-Dill Champagne Beurre Blanc</li>
              <li>
                Pierre’s Salmon with White Wine, Crème Fraîche, and Sorrel
              </li>
              <li>Seared Scallops with Garlic and Herbs</li>
              <li>Seared Tuna Steaks with Green Peppercorn Sauce</li>
              <li>Sole Fillets with Lemon, Butter, and Parsley Sauce</li>
              <li>Whole Roasted Trout with Lemon, Butter, and Parsley Sauce</li>
              <li>
                Sole Fillets with Crispy Potato Scales and Herb-Lemon Crème
                Fraîche
              </li>
            </ul>
            <h3>Chapter 6: Chicken and Duck</h3>
            <ul>
              <li>Chicken in Red Wine with Bacon, Onions, and Mushrooms</li>
              <li>
                Grilled Chicken Paillard with Tomatoes, Fennel, and Olives
              </li>
              <li>Chicken with Mustard</li>
              <li>Duck Confit</li>
              <li>Duck Confit Parmentier</li>
              <li>Duck Ragoût with Spaghetti Squash Polenta</li>
              <li>Roasted Chicken and Tarragon Cream</li>
              <li>Roasted Chicken in Port Wine, Cream, and Mushroom Sauce</li>
              <li>Roasted Quail with Bacon and Cabernet Sauvignon Sauce</li>
              <li>
                Spice Crusted Duck Breast with Blackberry-Pinot Noir Sauce
              </li>
            </ul>
            <h3>Chapter 7: Pork, Veal, Lamb, and Beef</h3>
            <ul>
              <li>Beef Tenderloin Filet with Red Wine Butter Sauce</li>
              <li>Braised Beef Short Ribs with Port Wine and Chocolate</li>
              <li>
                Braised Beef Stew with Red Wine, Bacon, Tomatoes, and Olives
              </li>
              <li>
                Braised Sauerkraut with Pork Chops, Sausages, Potatoes, and
                Mustard
              </li>
              <li>
                Braised Veal Shanks with Wine, Tomatoes, Capers, and Olives
              </li>
              <li>
                Grilled Steak and Lamb with Fresh Herbs, Feta, and Pomegranate
              </li>
              <li>
                Hamburgers with Sautéed Onions, Mushrooms, and Potatoes in
                Mustard Cream Sauce
              </li>
              <li>Honey Mustard and Herb-Crusted Rack of Lamb</li>
              <li>
                Lamb Meatballs with Minted Yogurt and Pomegranate Molasses
              </li>
              <li>Lamb Shoulder Braised with Tomatoes and Garlic</li>
              <li>Pork Medallions with Wine, Cream, Mustard, and Herbs</li>
              <li>
                Roasted Leg of Lamb with Chorizo, Potatoes, Olives, and Herbs
              </li>
              <li>Rolled Beef with Prosciutto, Fontina, Olives, and Basil</li>
              <li>Steak au Poivre</li>
              <li>Steak Diane</li>
            </ul>
            <h3>Chapter 8: Sweets</h3>
            <ul>
              <li>Apricot Soufflé </li>
              <li>Baked Apples with Goat Cheese, Bacon, and Walnuts</li>
              <li>Blue Cheese, Basil, Lemon Zest, and Amarena Cherries</li>
              <li>Brown Butter Pistachio and Lemon Financiers</li>
              <li>Cardamom Scented Dark Chocolate Truffles</li>
              <li>Cherry Clafouti with Maple Whipped Cream</li>
              <li>
                Chocolate-Coconut Pots de Crème with Passion Fruit Caramel
              </li>
              <li>Cinnamon Apple Crumble </li>
              <li>Coffee Crème Brûlée</li>
              <li>Crêpes Suzette</li>
              <li>Dark Chocolate Espresso Soufflé</li>
              <li>Dark Chocolate Ganache with Fresh Seasonal Fruit</li>
              <li>
                Frozen Lemon Custard with Vanilla Crème Fraîche and Blueberries
              </li>
              <li>Grilled Honey-Butter Nectarines with Cinnamon Ice Cream</li>
              <li>Honey-Butter Banana Cream Crêpes</li>
              <li>Instant Cherry Sorbet</li>
              <li>Pears Poached in Port Wine and Vanilla</li>
              <li>Salted Caramel Dark Chocolate Mousse</li>
              <li>Strawberries and Vanilla Crème Fraîche Stuffed Crêpes</li>
              <li>Strawberry-Champagne Sorbet with Lemongrass and Lime</li>
              <li>Summer Fruit Papillotes</li>
              <li>Triple Cream Brie Cheesecake with Mango and Passion Fruit</li>
              <li>Vanilla-Lavender Pots de Crème</li>
              <li>Vanilla Ice Cream</li>
              <li>Chocolate Ice Cream</li>
              <li>Cherry Chunk Chocolate Chip Ice Cream</li>
              <li>Chocolate-Mocha Crème Fraîche Ice Cream</li>
              <li>Cinnamon Ice Cream</li>
              <li>Mint Chocolate Chip Ice Cream</li>
              <li>Salted Caramel Ice Cream</li>
            </ul>
            <h3>Chapter 9: Lifesavers</h3>
            <ul>
              <li>Maitre d’ Hotel Butter</li>
              <li>Mustard Butter</li>
              <li>Garlic Butter</li>
              <li>Herb Butter</li>
              <li>Anchovy, Garlic, and Rosemary Butter</li>
              <li>Truffle Butter</li>
              <li>Peppercorn Butter</li>
              <li>Roquefort-Port Butter</li>
              <li>Escargot Butter</li>
              <li>Chili Butter</li>
              <li>Chocolate Butter</li>
              <li>Espresso Butter</li>
              <li>Aïoli</li>
              <li>Avocado Sauce Verte</li>
              <li>Basil Pistou</li>
              <li>Eggplant Caviar</li>
              <li>Romesco</li>
              <li>Baked Ricotta with Fresh Herbs and Olive Oil</li>
              <li>Chimichurri Sauce</li>
              <li>Crème Fraîche</li>
              <li>Garlic and Herb Infused Olive Oil</li>
              <li>Garlic Confit</li>
              <li>Garlic, Anchovy, and Rosemary Vinaigrette</li>
              <li>Herbes De Provence</li>
              <li>Honey-Vanilla Whipped Crème Fraîche</li>
              <li>Salsa Verde</li>
              <li>Salted Maple Caramel Sauce</li>
              <li>Shallot and Mustard Vinaigrette</li>
              <li>Simple Homemade Tomato Sauce</li>
              <li>Tarragon Mayonnaise</li>
            </ul>
            <h3>Chapter 10: Bonus Content</h3>
            <ul>
              <li>How to Cook the Perfect Steak</li>
              <li>Creating the Ultimate Cheese Spread with Wine Pairings</li>
              <li>
                Guide to Cooking Meat and Creating Sauces in 10 Easy Steps
              </li>
              <li>Tasting Guide</li>
            </ul>
            <br />
            <a
              className="cookbook-button"
              href="https://www.amazon.com/Bushels-Feasts-Recipes-Gluten-Lifestyle/dp/1735926213/ref=sr_1_1?dchild=1&keywords=bushels+and+feasts&qid=1606956534&sr=8-1"
              target="_blank"
              rel="noreferrer"
            >
              <button> Buy Cookbook </button>
            </a>
            <a className="cookbook-button" href="/">
              <EbookButton label={"Buy eCookBook"} lineItems={[Bookitem]} />
            </a>
          </div>
        </Section>
        <Section style={{ width: "100vw", margin: "4rem auto 0rem auto" }}>
          <Gallery />
        </Section>
      </StyledCookbook>
    </Layout>
  )
}

const StyledCookbook = styled.div`
  .box {
    width: 80vw;
    margin: 2rem auto 0rem auto;
    p {
      margin-bottom: 1rem;
    }
  }
  .dessert-link a {
    font-weight: bold;
    color: var(--darkGray);
    text-decoration: underline;
  }
  .header-container {
    width: 80%;
    margin: 2rem auto 0rem auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    .rina-image {
      flex: 1;
      margin-right: 2rem;
    }
    .box-title {
      flex: 2;
      color: var(--mainColor);
    }
  }
  .bio-gallery {
    width: 100vw;
    margin: 2rem auto;
    display: flex;
    flex-wrap: wrap;
  }
  .bio-item {
    flex-basis: 25%;
  }
  .food-gallery {
    width: 100vw;
    margin: 0rem auto;
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    flex-basis: 20%;
  }
  svg {
    color: var(--mainColor);
  }
  .cookbook-button {
    button {
      background: var(--mainColor);
      border: none;
      border-radius: 5px;
      padding: 1rem 2rem;
      margin: 2rem 0rem;
      font-size: 1.5rem;
      color: #ffffff;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .testimonial {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .matt-image {
    flex-basis: 20%;
    margin-right: 1rem;
  }
  .matt-copy {
    flex-basis: 70%;
  }
  .matt {
    width: 200px;
    margin-right: 10px;
  }
  .book-content {
    h3 {
      color: var(--mainColor);
      margin-top: 2rem;
    }
    ul {
      margin-left: 2rem;
    }
  }
  @media (max-width: 768px) {
    .bio-item {
      flex-basis: 50%;
    }
    .item {
      flex-basis: 50%;
    }
    h1 {
      line-height: 2rem;
    }
    h3 {
      line-height: 1.2rem;
      margin: 1rem 0rem;
    }
    .matt-image,
    .matt-copy {
      flex-basis: 100%;
    }
    .header-container {
      .rina-image {
        flex-basis: 100%;
      }
    }
  }
`

export default Index
