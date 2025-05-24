<?php

namespace App\Filament\Resources\ProjectLanguageResource\Pages;

use App\Filament\Resources\ProjectLanguageResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditProjectLanguage extends EditRecord
{
    protected static string $resource = ProjectLanguageResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
