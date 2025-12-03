<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'content' => fake()->paragraphs(5, true),
            'img_url' => $this->makeFakeImageUrl(),
        ];
    }

    public function makeFakeImageUrl(){
        $url = "http://picsum.photos/3";
        $rnd = rand(10, 99);
        $url .= $rnd;
        dump($url);
        return $url;
    }
}
