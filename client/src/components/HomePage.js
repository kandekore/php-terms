import React from "react";
import { Link } from "react-router-dom";

// Assuming this JSON data is imported or defined somewhere in your project
import categoriesData from "../terms.json";

function HomePage() {
  // Function to split categories into three equal parts for the columns
  const splitCategories = (categories) => {
    let size = Math.ceil(categories.length / 3);
    return [0, 1, 2].map((_, i) => categories.slice(i * size, i * size + size));
  };

  const categoryColumns = splitCategories(categoriesData.categories);

  return (
    <div>
      <h1 className="heading">PHP Reference Resource</h1>
      <p>Welcome to the PHP Reference Resource, an essential guide designed to illuminate the path for both budding programmers embarking on their journey and experienced developers seeking to refine their mastery of PHP. This digital compendium unfolds the intricate tapestry of PHP programming, from its foundational syntax to the complex paradigms that power today’s web applications.</p>

      <p>Our mission is to demystify PHP programming, making it accessible and engaging for learners at all levels. As you navigate through our carefully curated categories, you'll find each one dedicated to a distinct aspect of PHP—ranging from the very basics of variables and data types to the advanced territories of asynchronous programming, security, and beyond. Each category is a gateway to a wealth of knowledge, presenting key concepts with clear explanations, practical examples, and code snippets that illuminate the theory with the glow of practice.</p>

      <p>Here, learning is structured yet flexible, allowing you to build a solid foundation at your own pace before diving into more sophisticated topics. We believe in the power of understanding the core principles deeply, which in turn enables creativity and innovation in problem-solving. This platform stands as a testament to our commitment to high-quality, up-to-date content that reflects the latest trends, standards, and best practices in the ever-evolving PHP landscape.</p>

      <p>Whether you're just starting out, transitioning from another programming language, or looking to polish your existing skills, this resource is designed to support your learning journey. Dive into the concepts, explore the examples, and start coding today. Embark on this adventure to master the server-side scripting language that powers over 78% of the web—welcome to your ultimate guide to PHP programming.</p>
     
      <h3 className="heading">Categories & Concepts</h3>
      <div className="flex-container" style={{ display: "flex", justifyContent: "space-between" }}>
        {categoryColumns.map((categories, columnIndex) => (
          <nav key={columnIndex} style={{ width: "32%" }}>
            <ul>
              {categories.map((category) => (
                <li key={category.name}>
                  <Link to={`/${category.name.replace(/\s+/g, "-")}`}>{category.name}</Link>
                  <ul>
                    {category.concepts.map((concept) => (
                      <li key={concept.term}>
                        <Link to={`/concept?query=${encodeURIComponent(concept.term)}`}>{concept.term}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
