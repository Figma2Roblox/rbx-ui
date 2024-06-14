import { EnumItems, createEnumItems, EnumItem } from "../enumsHelper
export { EnumItems, EnumItem }

export namespace Enum {
	export namespace FontWeight {
		const enumItems = createEnumItems("FontWeight", [
			{ Name: "SemiBold", Value: 600 },
			{ Name: "ExtraBold", Value: 800 },
			{ Name: "Regular", Value: 400 },
			{ Name: "Thin", Value: 100 },
			{ Name: "Heavy", Value: 900 },
			{ Name: "Medium", Value: 500 },
			{ Name: "Bold", Value: 700 },
			{ Name: "Light", Value: 300 },
			{ Name: "ExtraLight", Value: 200 },
		])
		
		export const [SemiBold, ExtraBold, Regular, Thin, Heavy, Medium, Bold, Light, ExtraLight] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type FontWeight = EnumItem<"FontWeight">
	
	export namespace FontStyle {
		const enumItems = createEnumItems("FontStyle", [
			{ Name: "Normal", Value: 0 },
			{ Name: "Italic", Value: 1 },
		])
		
		export const [Normal, Italic] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type FontStyle = EnumItem<"FontStyle">
	
	export namespace SelectionBehavior {
		const enumItems = createEnumItems("SelectionBehavior", [
			{ Name: "Escape", Value: 0 },
			{ Name: "Stop", Value: 1 },
		])
		
		export const [Escape, Stop] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type SelectionBehavior = EnumItem<"SelectionBehavior">
	
	export namespace SizeConstraint {
		const enumItems = createEnumItems("SizeConstraint", [
			{ Name: "RelativeXX", Value: 1 },
			{ Name: "RelativeYY", Value: 2 },
			{ Name: "RelativeXY", Value: 0 },
		])
		
		export const [RelativeXX, RelativeYY, RelativeXY] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type SizeConstraint = EnumItem<"SizeConstraint">
	
	export namespace BorderMode {
		const enumItems = createEnumItems("BorderMode", [
			{ Name: "Outline", Value: 0 },
			{ Name: "Inset", Value: 2 },
			{ Name: "Middle", Value: 1 },
		])
		
		export const [Outline, Inset, Middle] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type BorderMode = EnumItem<"BorderMode">
	
	export namespace AutomaticSize {
		const enumItems = createEnumItems("AutomaticSize", [
			{ Name: "None", Value: 0 },
			{ Name: "Y", Value: 2 },
			{ Name: "XY", Value: 3 },
			{ Name: "X", Value: 1 },
		])
		
		export const [None, Y, XY, X] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type AutomaticSize = EnumItem<"AutomaticSize">
	
	export namespace FrameStyle {
		const enumItems = createEnumItems("FrameStyle", [
			{ Name: "ChatGreen", Value: 4 },
			{ Name: "ChatRed", Value: 5 },
			{ Name: "Custom", Value: 0 },
			{ Name: "RobloxSquare", Value: 2 },
			{ Name: "RobloxRound", Value: 3 },
			{ Name: "DropShadow", Value: 6 },
			{ Name: "ChatBlue", Value: 1 },
		])
		
		export const [ChatGreen, ChatRed, Custom, RobloxSquare, RobloxRound, DropShadow, ChatBlue] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type FrameStyle = EnumItem<"FrameStyle">
	
	export namespace ButtonStyle {
		const enumItems = createEnumItems("ButtonStyle", [
			{ Name: "RobloxRoundButton", Value: 3 },
			{ Name: "RobloxButtonDefault", Value: 1 },
			{ Name: "Custom", Value: 0 },
			{ Name: "RobloxButton", Value: 2 },
			{ Name: "RobloxRoundDropdownButton", Value: 5 },
			{ Name: "RobloxRoundDefaultButton", Value: 4 },
		])
		
		export const [RobloxRoundButton, RobloxButtonDefault, Custom, RobloxButton, RobloxRoundDropdownButton, RobloxRoundDefaultButton] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type ButtonStyle = EnumItem<"ButtonStyle">
	
	export namespace ResamplerMode {
		const enumItems = createEnumItems("ResamplerMode", [
			{ Name: "Pixelated", Value: 1 },
			{ Name: "Default", Value: 0 },
		])
		
		export const [Pixelated, Default] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type ResamplerMode = EnumItem<"ResamplerMode">
	
	export namespace ScaleType {
		const enumItems = createEnumItems("ScaleType", [
			{ Name: "Tile", Value: 2 },
			{ Name: "Crop", Value: 4 },
			{ Name: "Fit", Value: 3 },
			{ Name: "Slice", Value: 1 },
			{ Name: "Stretch", Value: 0 },
		])
		
		export const [Tile, Crop, Fit, Slice, Stretch] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type ScaleType = EnumItem<"ScaleType">
	
	export namespace TextDirection {
		const enumItems = createEnumItems("TextDirection", [
			{ Name: "LeftToRight", Value: 1 },
			{ Name: "Auto", Value: 0 },
			{ Name: "RightToLeft", Value: 2 },
		])
		
		export const [LeftToRight, Auto, RightToLeft] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type TextDirection = EnumItem<"TextDirection">
	
	export namespace TextYAlignment {
		const enumItems = createEnumItems("TextYAlignment", [
			{ Name: "Top", Value: 0 },
			{ Name: "Center", Value: 1 },
			{ Name: "Bottom", Value: 2 },
		])
		
		export const [Top, Center, Bottom] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type TextYAlignment = EnumItem<"TextYAlignment">
	
	export namespace TextTruncate {
		const enumItems = createEnumItems("TextTruncate", [
			{ Name: "None", Value: 0 },
			{ Name: "AtEnd", Value: 1 },
		])
		
		export const [None, AtEnd] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type TextTruncate = EnumItem<"TextTruncate">
	
	export namespace TextXAlignment {
		const enumItems = createEnumItems("TextXAlignment", [
			{ Name: "Left", Value: 0 },
			{ Name: "Right", Value: 1 },
			{ Name: "Center", Value: 2 },
		])
		
		export const [Left, Right, Center] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type TextXAlignment = EnumItem<"TextXAlignment">
	
	export namespace AspectType {
		const enumItems = createEnumItems("AspectType", [
			{ Name: "ScaleWithParentSize", Value: 1 },
			{ Name: "FitWithinMaxSize", Value: 0 },
		])
		
		export const [ScaleWithParentSize, FitWithinMaxSize] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type AspectType = EnumItem<"AspectType">
	
	export namespace DominantAxis {
		const enumItems = createEnumItems("DominantAxis", [
			{ Name: "Width", Value: 0 },
			{ Name: "Height", Value: 1 },
		])
		
		export const [Width, Height] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type DominantAxis = EnumItem<"DominantAxis">
	
	export namespace HorizontalAlignment {
		const enumItems = createEnumItems("HorizontalAlignment", [
			{ Name: "Left", Value: 1 },
			{ Name: "Right", Value: 2 },
			{ Name: "Center", Value: 0 },
		])
		
		export const [Left, Right, Center] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type HorizontalAlignment = EnumItem<"HorizontalAlignment">
	
	export namespace FillDirection {
		const enumItems = createEnumItems("FillDirection", [
			{ Name: "Horizontal", Value: 0 },
			{ Name: "Vertical", Value: 1 },
		])
		
		export const [Horizontal, Vertical] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type FillDirection = EnumItem<"FillDirection">
	
	export namespace VerticalAlignment {
		const enumItems = createEnumItems("VerticalAlignment", [
			{ Name: "Bottom", Value: 2 },
			{ Name: "Center", Value: 0 },
			{ Name: "Top", Value: 1 },
		])
		
		export const [Bottom, Center, Top] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type VerticalAlignment = EnumItem<"VerticalAlignment">
	
	export namespace SortOrder {
		const enumItems = createEnumItems("SortOrder", [
			{ Name: "Custom", Value: 1 },
			{ Name: "Name", Value: 0 },
			{ Name: "LayoutOrder", Value: 2 },
		])
		
		export const [Custom, Name, LayoutOrder] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type SortOrder = EnumItem<"SortOrder">
	
	export namespace StartCorner {
		const enumItems = createEnumItems("StartCorner", [
			{ Name: "BottomLeft", Value: 2 },
			{ Name: "TopRight", Value: 1 },
			{ Name: "TopLeft", Value: 0 },
			{ Name: "BottomRight", Value: 3 },
		])
		
		export const [BottomLeft, TopRight, TopLeft, BottomRight] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type StartCorner = EnumItem<"StartCorner">
	
	export namespace UIFlexAlignment {
		const enumItems = createEnumItems("UIFlexAlignment", [
			{ Name: "SpaceBetween", Value: 3 },
			{ Name: "None", Value: 0 },
			{ Name: "SpaceAround", Value: 2 },
			{ Name: "Fill", Value: 1 },
			{ Name: "SpaceEvenly", Value: 4 },
		])
		
		export const [SpaceBetween, None, SpaceAround, Fill, SpaceEvenly] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type UIFlexAlignment = EnumItem<"UIFlexAlignment">
	
	export namespace ItemLineAlignment {
		const enumItems = createEnumItems("ItemLineAlignment", [
			{ Name: "Center", Value: 2 },
			{ Name: "Start", Value: 1 },
			{ Name: "End", Value: 3 },
			{ Name: "Automatic", Value: 0 },
			{ Name: "Stretch", Value: 4 },
		])
		
		export const [Center, Start, End, Automatic, Stretch] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type ItemLineAlignment = EnumItem<"ItemLineAlignment">
	
	export namespace EasingStyle {
		const enumItems = createEnumItems("EasingStyle", [
			{ Name: "Sine", Value: 1 },
			{ Name: "Back", Value: 2 },
			{ Name: "Exponential", Value: 8 },
			{ Name: "Circular", Value: 9 },
			{ Name: "Quint", Value: 5 },
			{ Name: "Quad", Value: 3 },
			{ Name: "Elastic", Value: 7 },
			{ Name: "Cubic", Value: 10 },
			{ Name: "Bounce", Value: 6 },
			{ Name: "Linear", Value: 0 },
			{ Name: "Quart", Value: 4 },
		])
		
		export const [Sine, Back, Exponential, Circular, Quint, Quad, Elastic, Cubic, Bounce, Linear, Quart] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type EasingStyle = EnumItem<"EasingStyle">
	
	export namespace EasingDirection {
		const enumItems = createEnumItems("EasingDirection", [
			{ Name: "Out", Value: 1 },
			{ Name: "In", Value: 0 },
			{ Name: "InOut", Value: 2 },
		])
		
		export const [Out, In, InOut] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type EasingDirection = EnumItem<"EasingDirection">
	
	export namespace ApplyStrokeMode {
		const enumItems = createEnumItems("ApplyStrokeMode", [
			{ Name: "Contextual", Value: 0 },
			{ Name: "Border", Value: 1 },
		])
		
		export const [Contextual, Border] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type ApplyStrokeMode = EnumItem<"ApplyStrokeMode">
	
	export namespace LineJoinMode {
		const enumItems = createEnumItems("LineJoinMode", [
			{ Name: "Miter", Value: 2 },
			{ Name: "Bevel", Value: 1 },
			{ Name: "Round", Value: 0 },
		])
		
		export const [Miter, Bevel, Round] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type LineJoinMode = EnumItem<"LineJoinMode">
	
	export namespace TableMajorAxis {
		const enumItems = createEnumItems("TableMajorAxis", [
			{ Name: "RowMajor", Value: 0 },
			{ Name: "ColumnMajor", Value: 1 },
		])
		
		export const [RowMajor, ColumnMajor] = enumItems
		export const GetEnumItems = () => enumItems
	}
	export type TableMajorAxis = EnumItem<"TableMajorAxis">
	
}
