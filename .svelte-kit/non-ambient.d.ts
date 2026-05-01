
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/cook" | "/count" | "/menu" | "/menu/recipes" | "/menu/recipes/[id]" | "/styles";
		RouteParams(): {
			"/menu/recipes/[id]": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string };
			"/cook": Record<string, never>;
			"/count": Record<string, never>;
			"/menu": { id?: string };
			"/menu/recipes": { id?: string };
			"/menu/recipes/[id]": { id: string };
			"/styles": Record<string, never>
		};
		Pathname(): "/" | "/cook" | "/count" | "/menu" | `/menu/recipes/${string}` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/beef.jpeg" | "/benben.gif" | "/benben.webp" | "/bgup3c.png" | "/drag.png" | "/emp.png" | "/en.webp" | "/exchange.webp" | "/fonts/bbydoll.otf" | "/fonts/minecraft.ttf" | "/fonts/pigame.otf" | "/gar.png" | "/id.webp" | "/lamb.jpeg" | "/lobs.png" | "/meat.jpeg" | "/men.png" | "/mush.png" | "/om.jpeg" | "/pad.jpeg" | "/ram.png" | "/robots.txt" | "/sal.png" | "/sas.jpeg" | "/sas.png" | "/spag.png" | "/sus.png" | "/teri.jpeg" | "/teri.png" | "/truf.png" | "/vege.jpeg" | "/wich.jpeg" | "/yaki.jpeg" | string & {};
	}
}