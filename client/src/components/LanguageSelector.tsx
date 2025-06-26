import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe } from "lucide-react";

interface LanguageSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
}

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

export function LanguageSelector({ value, onValueChange }: LanguageSelectorProps) {
  const selectedLanguage = languages.find(lang => lang.code === value);

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-auto min-w-[140px] focus:ring-2 focus:ring-[hsl(var(--korean-blue))]">
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4" />
          <SelectValue>
            {selectedLanguage && (
              <span className="flex items-center space-x-2">
                <span>{selectedLanguage.flag}</span>
                <span>{selectedLanguage.name}</span>
              </span>
            )}
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            <div className="flex items-center space-x-2">
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
