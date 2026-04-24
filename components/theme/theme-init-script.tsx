import { THEME_STORAGE_KEY } from "@/lib/theme-storage";

const inline = `(function(){
  try {
    var k=${JSON.stringify(THEME_STORAGE_KEY)};
    var s=localStorage.getItem(k);
    var m=window.matchMedia("(prefers-color-scheme: dark)");
    var d=s==="dark"?!0:s==="light"?!1:m.matches;
    if(d) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  } catch(e) {}
})();`;

/** Runs before React; pairs with ThemeControl in FloatingDock. */
export function ThemeInitScript() {
  return <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: inline }} />;
}
