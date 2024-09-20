import { RiMoonFill, RiSunFill } from "@remixicon/react";
import { Button } from "@nextui-org/react";
import { Theme, useTheme } from "remix-themes";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useTheme();

  return (
    <div className="self-center justify-self-center">
      {theme === Theme.DARK ? (
        <Button
          isIconOnly
          variant="light"
          onClick={() => setTheme(Theme.LIGHT)}
        >
          <RiSunFill />
        </Button>
      ) : (
        <Button isIconOnly variant="light" onClick={() => setTheme(Theme.DARK)}>
          <RiMoonFill />
        </Button>
      )}
    </div>
  );
};
