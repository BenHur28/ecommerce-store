"use client";

import Button from "@/components/ui/button";
import { Color, Size } from "@/types";
import { Plus } from "lucide-react";
import { useState } from "react";

interface MobileFitlersProps {
	sizes: Size[];
	colors: Color[];
}

const MobileFilters: React.FC<MobileFitlersProps> = ({ sizes, colors }) => {
	const [open, setOpen] = useState(false);

	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
				Filters
				<Plus size={20} />
			</Button>
		</div>
	);
};

export default MobileFilters;
