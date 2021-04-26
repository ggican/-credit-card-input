import formatMove from "../format-move";

describe("test app", () => {
    let data;

    beforeEach(() => {
        data = [
            {
                move: {
                    name: "fire-punch",
                    url: "https://pokeapi.co/api/v2/move/7/",
                },
                version_group_details: [
                    {
                        level_learned_at: 0,
                        move_learn_method: {
                            name: "machine",
                            url:
                                "https://pokeapi.co/api/v2/move-learn-method/4/",
                        },
                        version_group: {
                            name: "gold-silver",
                            url: "https://pokeapi.co/api/v2/version-group/3/",
                        },
                    },
                    {
                        level_learned_at: 0,
                        move_learn_method: {
                            name: "level-up",
                            url:
                                "https://pokeapi.co/api/v2/move-learn-method/4/",
                        },
                        version_group: {
                            name: "crystal",
                            url: "https://pokeapi.co/api/v2/version-group/4/",
                        },
                    },
                ],
            },
            {
                move: {
                    name: "mega-punch",
                    url: "https://pokeapi.co/api/v2/move/5/",
                },
                version_group_details: [
                    {
                        level_learned_at: 0,
                        move_learn_method: {
                            name: "machine",
                            url:
                                "https://pokeapi.co/api/v2/move-learn-method/4/",
                        },
                        version_group: {
                            name: "red-blue",
                            url: "https://pokeapi.co/api/v2/version-group/1/",
                        },
                    },
                    {
                        level_learned_at: 0,
                        move_learn_method: {
                            name: "tutor",
                            url:
                                "https://pokeapi.co/api/v2/move-learn-method/3/",
                        },
                        version_group: {
                            name: "firered-leafgreen",
                            url: "https://pokeapi.co/api/v2/version-group/7/",
                        },
                    },
                ],
            },
        ];
    });

    it("format move check tutor as expected", () => {
        expect(formatMove(data, "tutor")).toEqual([
            {
                move: {
                    name: "mega-punch",
                    url: "https://pokeapi.co/api/v2/move/5/",
                },
                version_group_details: [
                    {
                        level_learned_at: 0,
                        move_learn_method: {
                            name: "machine",
                            url:
                                "https://pokeapi.co/api/v2/move-learn-method/4/",
                        },
                        version_group: {
                            name: "red-blue",
                            url: "https://pokeapi.co/api/v2/version-group/1/",
                        },
                    },
                    {
                        level_learned_at: 0,
                        move_learn_method: {
                            name: "tutor",
                            url:
                                "https://pokeapi.co/api/v2/move-learn-method/3/",
                        },
                        version_group: {
                            name: "firered-leafgreen",
                            url: "https://pokeapi.co/api/v2/version-group/7/",
                        },
                    },
                ],
            },
        ]);
    });

    it("format move check level up as expected", () => {
        expect(formatMove(data, "level-up")).toEqual([
            {
                move: {
                    name: "fire-punch",
                    url: "https://pokeapi.co/api/v2/move/7/",
                },
                version_group_details: [
                    {
                        level_learned_at: 0,
                        move_learn_method: {
                            name: "machine",
                            url:
                                "https://pokeapi.co/api/v2/move-learn-method/4/",
                        },
                        version_group: {
                            name: "gold-silver",
                            url: "https://pokeapi.co/api/v2/version-group/3/",
                        },
                    },
                    {
                        level_learned_at: 0,
                        move_learn_method: {
                            name: "level-up",
                            url:
                                "https://pokeapi.co/api/v2/move-learn-method/4/",
                        },
                        version_group: {
                            name: "crystal",
                            url: "https://pokeapi.co/api/v2/version-group/4/",
                        },
                    },
                ],
            },
        ]);
    });

    it("format move check no data", () => {
        expect(formatMove(data, "no")).toEqual([]);
    });
});
