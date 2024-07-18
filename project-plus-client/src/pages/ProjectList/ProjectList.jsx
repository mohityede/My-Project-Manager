import ProjectCard from "@/components/Project/ProjectCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Fullstack",
  "Android",
  "Desktop",
  "Other",
]
const tags = [
  "All",
  "HTML",
  "CSS",
  "Javascript",
  "Java",
  "Python",
  "Golang",
  "Kotlin",
  "PHP",
  "Rust",
]

function ProjectList() {
  const [searchKey, setSearchKey] = useState("");
  const handleFilterChange = (element, value) => {
    console.log(element + " change " + value);
  };

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearchKey(event.target.value);
  };

  return (
    <>
      <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
        <section className="filter-section">
          <Card className="p-5 sticky top-10">
            <div className="flex justify-between lg:w-[20rem]">
              <p className="text-xl -tracking-wider font-mono">Filter</p>
              <Button varient="destructive" size="icon">
                <MixerHorizontalIcon />
              </Button>
            </div>

            <CardContent className="mt-5">
              <div className="space-y-7 lg:h-[70vh]">
                <div>
                  <h1 className="pb-3 text-gray-500 font-medium">Category</h1>
                  <Select
                    defaultValue="all"
                    onValueChange={(value) => handleFilterChange("category", value)}
                    className="w-[100%]"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="None" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat, ind) => (
                        <SelectItem
                          className="focus:bg-primary focus:text-white"
                          value={cat.toLowerCase()}
                          key={ind}
                        >
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h1 className="pb-3 text-gray-500 font-medium">Tags</h1>
                <Select
                  defaultValue="all"
                  onValueChange={(value) => handleFilterChange("tags", value)}
                  className="w-[100%]"
                  >
                  <SelectTrigger>
                    <SelectValue placeholder="None" />
                  </SelectTrigger>
                  <SelectContent>
                    {tags.map((tag, ind) => (
                      <SelectItem
                      className="focus:bg-primary focus:text-white"
                      value={tag.toLowerCase()}
                      key={ind}
                      >
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="project-list-section w-full lg:w-[48rem]">
          <div className="flex gap-2 items-center pb-5 justify-between mt-5">
            <div className="relative p-0 w-full">
              <Input
                onChange={(e) => handleSearchChange(e)}
                className="40% px-9 bg-white"
                type="text"
                placeholder="Search Project..."
              />
              <MagnifyingGlassIcon className="absolute top-3 left-4 text-primary" />
            </div>
          </div>
          <div>
            <div className="space-y-5 min-h-[74vh]">
              {searchKey
                ? [1, 2, 3, 4].map((i) => <ProjectCard key={i} />)
                : [5, 6, 7].map((i) => <ProjectCard key={i} />)}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProjectList;
