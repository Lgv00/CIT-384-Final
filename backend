@RestController
public class FoodController {
    @GetMapping("/suggest-food")
    public List<String> getFoodSuggestions(@RequestParam List<String> cravings) {
        Map<String, List<String>> foodSuggestions = Map.of(
            "sweet", List.of("Cake", "Ice Cream", "Chocolate"),
            "savory", List.of("Pizza", "Burger", "Pasta"),
            "spicy", List.of("Spicy Tacos", "Curry", "Sichuan Stir Fry"),
            "salty", List.of("Pretzels", "Chips", "Popcorn")
        );

        List<String> suggestions = new ArrayList<>();
        for (String craving : cravings) {
            suggestions.addAll(foodSuggestions.getOrDefault(craving, Collections.emptyList()));
        }
        return suggestions;
    }
}
