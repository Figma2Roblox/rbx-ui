return {
	includedClassNames = {
		"Frame",
		"ImageButton",
		"ImageLabel",
		"TextBox",
		"TextButton",
		"TextLabel",
		"UIAspectRatioConstraint",
		"UICorner",
		-- "UIFlexItem",
		"UIGradient",
		"UIGridLayout",
		"UIListLayout",
		"UIPadding",
		"UIPageLayout",
		"UIScale",
		"UISizeConstraint",
		"UIStroke",
		"UITableLayout",
		"UITextSizeConstraint",
	},

	manuallyIncludedEnumNames = {
		"FontWeight",
		"FontStyle",
	},

	blacklistedInterfaceProperties = {
		Archivable = true,
		RootLocalizationTable = true,
		OpenTypeFeatures = true,
	},

	blacklistedDefaultProperties = {
		Name = true,
		ClassName = true,
		Archivable = true,
		Parent = true,
		RootLocalizationTable = true,
		OpenTypeFeatures = true,
	},
}
