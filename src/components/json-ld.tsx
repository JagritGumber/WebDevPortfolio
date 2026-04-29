const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jagrit Gumber",
  url: "https://jagritgumber.com",
  image: "https://jagritgumber.com/profile-pic.jpg",
  jobTitle: "Full Stack Developer",
  description:
    "Full-stack + native Rust engineer. Ships production SaaS by day, OSS and apps by night.",
  sameAs: [
    "https://github.com/JagritGumber",
    "https://x.com/Jagrit_Gumber",
    "https://www.linkedin.com/in/jagrit-gumber-2841a52a9",
  ],
};

export const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
  />
);
