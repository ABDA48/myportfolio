<?php

namespace App\Filament\Resources\ProjectLanguageResource\Pages;

use App\Filament\Resources\ProjectLanguageResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListProjectLanguages extends ListRecords
{
    protected static string $resource = ProjectLanguageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
