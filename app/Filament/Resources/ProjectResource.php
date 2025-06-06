<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
 use App\Models\Project;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
 

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Select::make('category_id')
                    ->relationship('category', 'name')
                    ->required(),
                Forms\Components\TagsInput::make('tags')
                    ->placeholder('Add tags')
                    ->separator(',')
                    ->tagSuffix('#')
                    ->required()->dehydrateStateUsing(fn ($state) => $state),
                Forms\Components\FileUpload::make('image')
                    ->image()->columnSpanFull()
                    ->required(),
                Forms\Components\Textarea::make('description')
                    ->required()
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('video_url')
                    ->maxLength(255)
                    ->default(null),
                Forms\Components\TextInput::make('client_name')
                    ->maxLength(255)
                    ->default(null),
                Forms\Components\DatePicker::make('completion_date'),
                Forms\Components\TextInput::make('project_url')
                    ->maxLength(255)
                    ->default(null),
                Forms\Components\TagsInput::make('features')
                    ->placeholder('Add features')
                    ->separator(',')
                    ->tagSuffix('.')
                    ->columnSpanFull()->dehydrateStateUsing(fn ($state) => $state),
                Forms\Components\Select::make('service_id')
                    ->relationship('service', 'name')
                    ->default(null),
                Forms\Components\Select::make('languages')
                ->label('Languages')
                ->relationship('languages', 'name')
                ->multiple()
                ->preload()
                ->searchable()
                ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('category.name')
                    
                    ->sortable(),
                Tables\Columns\ImageColumn::make('image'),
                Tables\Columns\TextColumn::make('video_url')
                    ->searchable(),
                Tables\Columns\TextColumn::make('client_name')
                    ->searchable(),
               
                Tables\Columns\TextColumn::make('project_url')
                    ->searchable(),
                Tables\Columns\TextColumn::make('service.name')
                    ->label('Service Name')
                    ->searchable()
                    ->sortable(),
                    Tables\Columns\TextColumn::make('completion_date')
                    ->date()
                    ->sortable() ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
