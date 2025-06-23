
import React from 'react';
import { VoiceSection } from '../data/voiceSectionsData';

interface VoiceSectionButtonsProps {
  voiceSections: VoiceSection[];
  activeVoiceSection: number;
  onSectionChange: (index: number) => void;
}

const VoiceSectionButtons: React.FC<VoiceSectionButtonsProps> = ({
  voiceSections,
  activeVoiceSection,
  onSectionChange
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
      {voiceSections.map((section, index) => (
        <button
          key={index}
          className={`px-6 py-3 rounded-lg transition-all ${
            activeVoiceSection === index
              ? 'bg-choir-gold text-choir-navy font-semibold'
              : 'bg-choir-navy/50 text-choir-cream hover:bg-choir-navy/80'
          }`}
          onClick={() => onSectionChange(index)}
        >
          <span className="mr-2">{section.icon}</span>
          {section.title}
        </button>
      ))}
    </div>
  );
};

export default VoiceSectionButtons;
