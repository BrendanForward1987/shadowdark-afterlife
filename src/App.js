// src/App.js
import React from 'react';
import './App.css';

// Define the afterlife domain data
const afterlifeDomains = [
  {
    icon: '⚖️',
    name: 'The Scales of the Soul',
    isConcept: true, // Flag to identify the main concept entry
    description: 'Souls are judged not by conventional morality, but by their "weight"—a measure determined by the accumulated burden of memory, guilt, solemn oaths, closely guarded secrets, and unforgiven sins. This weight dictates their final destination in the hereafter.',
  },
  {
    icon: '🕳️',
    name: 'THE HOLLOW BENEATH',
    weightConcept: 'Light as ash; the forgetful, faithless, or forsaken.',
    domainDesc: 'A colorless, desolate void where an unnerving wind constantly howls through skeletal trees made of bone. Souls drawn here are gradually eroded by oblivion, their memories stripped away until they become mere echoes, devoid of past or identity.',
    rulers: 'The Pale Collectors, eyeless robed figures who consume names.',
    whisper: '“Better to be forgotten than found.”',
  },
  {
    icon: '⛰️',
    name: 'THE THRONE OF STONE',
    weightConcept: 'Burdened with duty, oaths, or honor unfulfilled.',
    domainDesc: 'An eternal, colossal mountain piercing a cold, grey sky. Souls here are compelled to climb its unforgiving slopes towards an unreachable summit. The climb is endless, a perpetual striving—yet every step taken holds significance.',
    rulers: 'The Bound Kings, stone-bodied giants forever kneeling in solemn vigil.',
    whisper: '“Those who bear the weight of others never walk alone.”',
  },
  {
    icon: '🌊',
    name: 'THE DROWNED ABYSS',
    weightConcept: 'Heavy with secrets, lies, and concealed truths.',
    domainDesc: 'A boundless, black sea without surface or floor, suffocatingly deep. Souls drift aimlessly within currents of swirling memory, entangled in heavy chains forged from their own unspoken confessions and hidden knowledge.',
    rulers: 'The Deep Court—drowned monarchs adorned with kelp and pearls, their mouths perpetually full.',
    whisper: '“What you hide will weigh you down.”',
  },
  {
    icon: '🩸',
    name: 'THE CRIMSON MARKET',
    weightConcept: 'Stained with blood—of enemies, kin, or innocence.',
    domainDesc: 'A chaotic, sprawling bazaar perpetually lit by a visceral red glow. Here, souls desperately barter with fragments of themselves—memories, senses, emotions—in a futile attempt to purchase oblivion from their violent sins.',
    rulers: 'The Vein Merchants—serpentine, unsettling beings who trade in harvested guilt.',
    whisper: '“Every sin has a price, and every price can be paid.”',
  },
  {
    icon: '🐚',
    name: 'THE STILL GARDEN',
    weightConcept: 'Gentle and light—those who lived with mercy, love, or humility.',
    domainDesc: 'A silent, monochromatic grey field where a soft, melancholic rain perpetually falls. Time stands still in this tranquil yet sorrowful place. Regret is nurtured like a seed, watered by the endless drizzle, and reborn as strange, muted flowers.',
    rulers: 'The Mourning Sisters—faceless, ethereal shapes who sing without sound.',
    whisper: '“Even peace has weight.”',
  },
  {
    icon: '🔥',
    name: 'THE FORGE OF RESENTMENT',
    weightConcept: 'Heaviest of all—souls consumed by hatred, vengeance, or wrath.',
    domainDesc: 'A searing, molten underworld crackling with furious energy. The bitter and wrathful are forcibly reforged upon incandescent anvils, transformed into undying weapons destined to serve in perpetual, pointless wars.',
    rulers: 'The Iron Saint, a terrifying, burning god crowned with cruel nails.',
    whisper: '“What you die hating, you serve forever.”',
  },
  {
    icon: '🪞',
    name: 'THE MIRRORED COURT',
    weightConcept: 'Twisted by vanity, pride, or identity lost.',
    domainDesc: 'A disorienting, opulent palace constructed of endless halls and shimmering mirrors. These mirrors do not reflect the soul as it is, but cruelly showcase infinite possibilities of who they could have been, fueling eternal regret.',
    rulers: 'The Many-Faced Queen, an entity who wears every conceivable mask simultaneously.',
    whisper: '“The soul cracks when it forgets who it is.”',
  },
  {
    icon: '⏳',
    name: 'THE VEIL OF THE NEAR',
    weightConcept: 'Neither light nor heavy—those who died too soon, or lingered on the edge of death.',
    domainDesc: 'A grey, liminal zone existing precariously between the realms of life and the true afterlife. This misty non-place serves as a crossing point for ghosts, revenants, dreamwalkers, and others caught between worlds.',
    rulers: 'The Watchmen of the Hourglass, solemn figures who can turn back the sands of time, but always for a steep price.',
    whisper: '“Some doors were never meant to open.”',
  },
];

function App() {
  const concept = afterlifeDomains.find(d => d.isConcept);
  const domains = afterlifeDomains.filter(d => !d.isConcept);

  return (
    <div className="App">
      <header className="header">
        {concept && (
          <>
            <h1>{concept.icon} {concept.name} {concept.icon}</h1>
            <p>{concept.description}</p>
          </>
        )}
         {!concept && <h1>Domains of the Afterlife</h1>} {/* Fallback title */}
      </header>

      <div className="domains-grid">
        {domains.map((domain, index) => (
          <div key={index} className="domain-card">
            <span className="domain-icon" aria-hidden="true">{domain.icon}</span>
            <h2>{domain.name}</h2>
            <p><strong>Weight:</strong> {domain.weightConcept}</p>
            <p><strong>Domain:</strong> {domain.domainDesc}</p>
            <p><strong>Rulers:</strong> {domain.rulers}</p>
            <p className="whisper"><em>"{domain.whisper}"</em></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;