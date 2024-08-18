import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	transformerDirectives,
	transformerVariantGroup,
	presetWebFonts,
} from "unocss";

export default defineConfig({
	shortcuts: [
		{
			"sidebar-open": "w-240px px-2 lg:w-240px",
			"sidebar-close": "w-48px px-2 lg:w-48px",
			btn: "rounded-2 border-1 border-transparent px-1.2em py-0.6em text-1em font-500 whitespace-nowrap transition-border-color duration-250 cursor-pointer bg-#0f0f0f98 text-#ffffff hover:border-#396cd8 active:bg-#0f0f0f69 shadow-[0_2px_2px_rgba(0,0,0,0.2)]",
		},
	],
	rules: [],
	theme: {
		colors: {
			background: {
				DEFAULT: "var(--color-background-100)",
				90: "var(--color-background-90)",
				80: "var(--color-background-80)",
				70: "var(--color-background-70)",
			},
			content: {
				DEFAULT: "var(--color-content)",
			},
		},
	},
	layers: {
		default: 1,
		utilities: 2,
	},
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons(),
		presetTypography(),
		presetWebFonts({
			provider: "google",
			fonts: {
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
