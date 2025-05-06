
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  icon?: React.ReactNode;
}

interface CategoryListProps {
  categories: Category[];
  selectedCategory?: string;
  onSelectCategory: (id: string) => void;
}

const CategoryList = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryListProps) => {
  return (
    <div className="relative">
      <ScrollArea className="w-full whitespace-nowrap py-2">
        <div className="flex gap-2 px-4 md:px-0">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "secondary"}
              className="rounded-full flex-shrink-0"
              onClick={() => onSelectCategory(category.id)}
            >
              {category.icon && <span className="mr-2">{category.icon}</span>}
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
};

export default CategoryList;
