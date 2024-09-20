// components/ThemeSwitcher.tsx
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunFill } from "@remixicon/react";
import { Button } from "@nextui-org/react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      The current theme is: {theme}
      <Button isIconOnly variant="light" onClick={() => setTheme("light")}>
        <RiSunFill />
      </Button>
      <Button isIconOnly variant="light" onClick={() => setTheme("dark")}>
        <RiMoonFill />
      </Button>
    </div>
  );
};
