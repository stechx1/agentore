import { Tag, AddButton } from "../../components";
import React, { useState } from "react";

import { CompactPicker } from "react-color";

export const InquiryBox = ({ para, tags, setTags, dropdown, setDropdown }) => {
  const [active, setActive] = useState(false);
  const [childActive, setChildActive] = useState(false);
  const [newDropdownItem, setNewDropdownItem] = useState("");

  const [color, setColor] = useState("#ccc");

  const addItemToTags = (item) => {
    setTags([
      ...tags,
      {
        id: tags?.length + 1,
        name: item.name,
        color: item.color,
      },
    ]);
    setActive(false);
  };

  const addItemToDropdown = (e) => {
    if (e.target.value && e.key == "Enter") {
      setDropdown([
        ...dropdown,
        { id: dropdown.length + 1, name: newDropdownItem, color: color },
      ]);
      setChildActive(false);
      setNewDropdownItem("");
    }
  };

  return (
    <div className="bg-white text-black flex flex-col p-5 pr-16 rounded-3xl max-w-2xl justify-between">
      <p>{para}</p>
      <div className="flex space-x-2 mt-4 items-center gap-y-2 flex-wrap">
        {tags?.map((tag) => (
          <Tag name={tag.name} color={tag.color} key={tag.id} />
        ))}
        <div className="flex flex-col relative">
          <AddButton
            onClick={() => {
              setActive((state) => !state);
              if (childActive == true) {
                setChildActive(false);
              }
            }}
          />

          <div
            id="dropdown"
            className={`${
              active == true ? null : "hidden"
            } z-10 w-44 bg-white p-0.5 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-10`}
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              {dropdown?.map((tag) => {
                return (
                  <li
                    className="m-1 cursor-pointer"
                    onClick={() => addItemToTags(tag)}
                  >
                    <Tag name={tag?.name} color={tag?.color} key={tag?.id} />
                  </li>
                );
              })}
              <li
                className="m-1 cursor-pointer"
                onClick={() => setChildActive((state) => !state)}
              >
                <Tag
                  name="Add a new label"
                  color="white"
                  offlabel="black"
                  bgColor="black"
                />
              </li>
            </ul>
          </div>
          <div
            className={`${
              childActive == true ? null : "hidden"
            } flex flex-col absolute top-10 z-50`}
          >
            <input
              type="text"
              name="package"
              className="rounded-sm p-2"
              placeholder="write and enter"
              style={{ borderRadius: "5px" }}
              onChange={(e) => setNewDropdownItem(e.target.value)}
              onKeyUp={addItemToDropdown}
              id="new-dropdown-item"
              value={newDropdownItem}
            />
            <CompactPicker
              color={color}
              onChangeComplete={(color) => setColor(color.hex)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
