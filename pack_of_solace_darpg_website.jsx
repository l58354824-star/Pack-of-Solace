import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// ======================
// ORGANISATION INFO
// ======================
const organisation = {
  name: "Pack Of Solace",
  description:
    "Pack Of Solace is a multi‑division realistic DARPG organisation housing working dogs, show kennels, catteries, rescues, and exotic programs. Each division focuses on unique breeding goals, achievements, and storytelling.",
  logo: "[PLACE LOGO IMAGE HERE]",
};

// ======================
// KENNELS
// ======================
const kennels = [
  {
    name: "L5C Kennels",
    description:
      "Working and performance dogs focused on training, trials, and realistic breeding programs.",
  },
  {
    name: "LaLuna’s Hunting Kennel",
    description:
      "Hunting and field line dogs specializing in tracking, scent work, and outdoor performance.",
  },
  {
    name: "Snowbound Trails",
    description:
      "Northern and sled-type dogs built for endurance, adventure, and harsh environments.",
  },
  {
    name: "Noble Hearts Kennel",
    description:
      "Show and companion dogs bred for structure, temperament, and elegance.",
  },
  {
    name: "Sunshine Ranch",
    description:
      "A relaxed rescue and mixed-animal space for mutts and companion animals.",
  },
  {
    name: "LightMoon Cattery",
    description:
      "Exotic feline program including cheetahs and rare big-cat inspired lines.",
  },
  {
    name: "Exotic Elegance Cattery",
    description:
      "Specialized breeding program for Bengals and other exotic domestic cats.",
  },
  {
    name: "Royal Whiskers Cattery",
    description:
      "Luxury Maine Coon and pedigree companion cats focused on health and lineage.",
  },
];

// ======================
// SAMPLE REGISTRY DATA
// ======================
const exampleAnimals = [
  {
    name: "CH. Solace Northern Aurora",
    breed: "Siberian Husky",
    titles: "CH, BIS Winner",
    personality: "Energetic, intelligent, loyal",
    genetics: "Clear Panel",
    achievements: "Best in Show x3",
    image: "[REFERENCE IMAGE]",
  },
];

export default function PackOfSolaceSite() {
  const [selectedKennel, setSelectedKennel] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  // ======================
  // HOME PAGE
  // ======================
  if (!selectedKennel) {
    return (
      <div className="min-h-screen bg-neutral-100 p-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-5xl font-bold">{organisation.name}</h1>
          <p className="max-w-2xl mx-auto mt-4 text-neutral-600">
            {organisation.description}
          </p>
          <div className="mt-4 text-sm text-neutral-400">
            {organisation.logo}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {kennels.map((kennel) => (
            <Card key={kennel.name} className="rounded-2xl shadow-md">
              <CardContent className="p-4 flex flex-col gap-4">
                <h2 className="text-xl font-semibold">{kennel.name}</h2>
                <p className="text-sm text-neutral-600">
                  {kennel.description}
                </p>
                <Button onClick={() => setSelectedKennel(kennel)}>
                  Enter Kennel
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // ======================
  // DOG PROFILE PAGE
  // ======================
  if (selectedAnimal) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <Button onClick={() => setSelectedAnimal(null)}>← Back</Button>

        <Card className="mt-4 rounded-2xl shadow-lg">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-3xl font-bold">{selectedAnimal.name}</h2>
            <p><strong>Breed:</strong> {selectedAnimal.breed}</p>
            <p><strong>Titles:</strong> {selectedAnimal.titles}</p>
            <p><strong>Personality:</strong> {selectedAnimal.personality}</p>
            <p><strong>Genetics:</strong> {selectedAnimal.genetics}</p>
            <p><strong>Achievements:</strong> {selectedAnimal.achievements}</p>

            <div className="mt-6">
              <h3 className="font-semibold">Reference Image</h3>
              <div className="h-40 bg-neutral-200 flex items-center justify-center rounded-xl">
                {selectedAnimal.image}
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Gallery</h3>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-24 bg-neutral-200 rounded" />
                <div className="h-24 bg-neutral-200 rounded" />
                <div className="h-24 bg-neutral-200 rounded" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // ======================
  // REGISTRY PAGE
  // ======================
  const renderRegistry = () => (
    <div className="grid md:grid-cols-3 gap-4">
      {exampleAnimals.map((animal) => (
        <Card key={animal.name} className="cursor-pointer" onClick={() => setSelectedAnimal(animal)}>
          <CardContent className="p-4">
            <h3 className="font-semibold">{animal.name}</h3>
            <p className="text-sm text-neutral-500">{animal.breed}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderPlaceholder = (title) => (
    <Card className="rounded-2xl shadow">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-600">
          Add your {title.toLowerCase()} content here — events, art, sales,
          breeding plans, achievements, etc.
        </p>
      </CardContent>
    </Card>
  );

  // ======================
  // KENNEL PAGE
  // ======================
  return (
    <div className="min-h-screen bg-neutral-100 p-6">
      <Button
        className="mb-4"
        onClick={() => {
          setSelectedKennel(null);
          setActiveTab(null);
        }}
      >
        ← Back to Organisation
      </Button>

      <Card className="rounded-2xl shadow-lg mb-6">
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold">{selectedKennel.name}</h2>
          <p className="text-neutral-600">{selectedKennel.description}</p>
          <div className="mt-3 text-sm text-neutral-400">
            [KENNEL LOGO / BANNER HERE]
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-4 gap-3 mb-6">
        <Button variant="outline" onClick={() => setActiveTab("registry")}>Registry</Button>
        <Button variant="outline" onClick={() => setActiveTab("events")}>Events</Button>
        <Button variant="outline" onClick={() => setActiveTab("gallery")}>Gallery</Button>
        <Button variant="outline" onClick={() => setActiveTab("breeding")}>Breeding</Button>
        <Button variant="outline" onClick={() => setActiveTab("achievements")}>Achievements</Button>
        <Button variant="outline" onClick={() => setActiveTab("sales")}>Sales</Button>
        <Button variant="outline" onClick={() => setActiveTab("about")}>About</Button>
      </div>

      {activeTab === "registry" && renderRegistry()}
      {activeTab === "events" && renderPlaceholder("Events")}
      {activeTab === "gallery" && renderPlaceholder("Gallery")}
      {activeTab === "breeding" && renderPlaceholder("Breeding Program")}
      {activeTab === "achievements" && renderPlaceholder("Achievements")}
      {activeTab === "sales" && renderPlaceholder("Sales")}
      {activeTab === "about" && renderPlaceholder("About Kennel")}

      {!activeTab && (
        <p className="text-neutral-500 text-center">
          Select a tab to explore this kennel.
        </p>
      )}
    </div>
  );
}
