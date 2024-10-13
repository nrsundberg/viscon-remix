import { Button, Spinner } from "@nextui-org/react";
import { Theme, useTheme } from "remix-themes";
import { ClientOnly } from "remix-utils/client-only";
import { RiMoonFill, RiSunFill } from "@remixicon/react";

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
          <ClientOnly fallback={<Spinner />}>{() => <RiSunFill />}</ClientOnly>
        </Button>
      ) : (
        <Button isIconOnly variant="light" onClick={() => setTheme(Theme.DARK)}>
          <ClientOnly fallback={<Spinner />}>{() => <RiMoonFill />}</ClientOnly>
        </Button>
      )}
    </div>
  );
};
